import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import path from 'path'
import { Empty } from './proto/petPackage/Empty'
import { PetList } from './proto/petPackage/PetList'
import { ProtoGrpcType } from './proto/pets'
import { PetServiceHandlers } from './proto/petPackage/PetService'
import { Pet } from './proto/petPackage/Pet'
import { v4 as uuidv4 } from 'uuid';
import express from 'express';
import { HealthCheckResponse } from './proto/petPackage/HealthCheckResponse';

const app = express()


const PORT = 50051
const PROTO_FILE = './proto/pets.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const petPackage = grpcObj.petPackage

const server = new grpc.Server(app)

const pets = [
  { id: '1', name: 'Alaska', description: 'Description 1' },
  { id: '2', name: 'Husky', description: 'Description 2' }
]

const petList: PetList = {
  pets
}

server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`Your server as started on port ${port}`)
    server.start()
  })

server.addService(petPackage.PetService.service, {
  healthCheck: (call: grpc.ServerUnaryCall<Empty, HealthCheckResponse>, callback: any) => {
    console.log("done healthcheck")
    callback(null, { status: true, message: 'Server is healthy' });
  },
  list: (call: grpc.ServerUnaryCall<Empty, any>, callback: any) => {
    console.log("test grpc ...");
    callback(null, petList)
  },
  insert: (req: any, res: any) => {
    let pet = req.request
    pet.id = uuidv4()
    pets.push(pet)
    console.log(pets)
    res(null, pet)
  },
  delete: (call: any, callback: any) => {
    let index = pets.findIndex(pet => pet.id === call.request.id)
    if (index != -1) {
      pets.splice(index, 1)
      console.log(pets)
      callback(null, petList)
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: 'Not found'
      })
    }
  },
  update: (call: grpc.ServerUnaryCall<Pet, any>, callback: any) => {
    let petWant: any = pets.find(item => item.id === call.request.id)
    console.log(pets)
    console.log(petWant)
    if (petWant) {
      petWant.id = call.request.id
      petWant.name = call.request.name
      petWant.description = call.request.description
      callback(null, petWant)
    }
    else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: 'Not found'
      })
    }
  }
})

import http from 'http';

// Tạo một server HTTP mới sử dụng Express app
const httpServer = http.createServer(app);

// Đặt server HTTP để lắng nghe trên cổng 3000
httpServer.listen(3000, () => {
  console.log('HTTP Server running on port 3000');
});

app.get('/healthcheck', (req, res) => {
  res.json({"msg":"hello world"});
});