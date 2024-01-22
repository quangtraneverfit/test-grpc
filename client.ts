import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from './proto/pets'
import express, { Request, Response } from 'express'
import { Pet } from './proto/petPackage/Pet'
import { HealthCheckResponse } from './proto/petPackage/HealthCheckResponse';
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


const PORT = 50051
const PROTO_FILE = './proto/pets.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType


const client = new grpcObj.petPackage.PetService(
  'localhost:50051', grpc.credentials.createInsecure()
)


app.get('/get', (req: Request, res: Response) => {
  try {
    client.list({}, (error, pets) => {
      if (!error) {
        console.log('Fetch list pets successfully!')
        res.status(200).json({
          msg: 'get all success',
          data: pets
        })
      } else {
        throw new Error('khong lay duoc grpc')
      }
    })
  } catch (error: any) {
    res.status(500).json(error.message)
  }
})

app.get('/healthcheck', (req: Request, res: Response) => {
  try {
    const healthCheckRequest = {};
    client.healthCheck(healthCheckRequest, (error, response) => {
      if (error) {
        console.error('Health check failed:', error);
      } else {
        console.log('Health check response:', response);
        res.status(200).json({
          msg: 'get all success',
          data: response
        })
      }
    });
  } catch (error: any) {
    res.status(500).json(error.message)
  }
})

app.post('/insert', (req: Request, res: Response) => {
  try {
    const newPet: Pet = req.body
    client.insert(newPet, (error, pet) => {
      if (!error) {
        res.status(200).json({
          msg: 'insert success',
          data: pet
        })
      } else {
        throw new Error('khong lay duoc grpc')
      }
    })
  } catch (error: any) {
    res.status(500).json(error.message)
  }
})

app.delete('/delete/:id', (req: Request, res: Response) => {
  try {
    const id = req.params.id
    client.delete({ id: id }, (error, pets) => {
      if (!error) {
        res.status(200).json({
          msg: 'delete success',
          data: pets
        })
      } else {
        throw new Error('khong lay duoc grpc')
      }
    })
  } catch (error: any) {
    res.status(500).json(error.message)
  }
})

app.put('/update/:id', (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const clientData = req.body
    const updateData: Pet = {
      id,
      ...clientData
    }
    client.update(updateData, (error, pet) => {
      if (!error) {
        res.status(200).json({
          msg: 'update success',
          data: pet
        })
      } else {
        throw new Error('khong lay duoc grpc')
      }
    })
  } catch (error: any) {
    res.status(500).json(error.message)
  }
})

app.get('/', (req: Request, res: Response) => {
  res.send('home')
})

app.listen(3000, () => [
  console.log('client running on port: ', 3000)
])