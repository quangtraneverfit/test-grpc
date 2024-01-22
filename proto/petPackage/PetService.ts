// Original file: proto/pets.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _petPackage_Empty, Empty__Output as _petPackage_Empty__Output } from '../petPackage/Empty';
import type { HealthCheckResponse as _petPackage_HealthCheckResponse, HealthCheckResponse__Output as _petPackage_HealthCheckResponse__Output } from '../petPackage/HealthCheckResponse';
import type { Pet as _petPackage_Pet, Pet__Output as _petPackage_Pet__Output } from '../petPackage/Pet';
import type { PetList as _petPackage_PetList, PetList__Output as _petPackage_PetList__Output } from '../petPackage/PetList';
import type { PetRequestId as _petPackage_PetRequestId, PetRequestId__Output as _petPackage_PetRequestId__Output } from '../petPackage/PetRequestId';

export interface PetServiceClient extends grpc.Client {
  Delete(argument: _petPackage_PetRequestId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_PetList__Output>): grpc.ClientUnaryCall;
  Delete(argument: _petPackage_PetRequestId, metadata: grpc.Metadata, callback: grpc.requestCallback<_petPackage_PetList__Output>): grpc.ClientUnaryCall;
  Delete(argument: _petPackage_PetRequestId, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_PetList__Output>): grpc.ClientUnaryCall;
  Delete(argument: _petPackage_PetRequestId, callback: grpc.requestCallback<_petPackage_PetList__Output>): grpc.ClientUnaryCall;
  delete(argument: _petPackage_PetRequestId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_PetList__Output>): grpc.ClientUnaryCall;
  delete(argument: _petPackage_PetRequestId, metadata: grpc.Metadata, callback: grpc.requestCallback<_petPackage_PetList__Output>): grpc.ClientUnaryCall;
  delete(argument: _petPackage_PetRequestId, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_PetList__Output>): grpc.ClientUnaryCall;
  delete(argument: _petPackage_PetRequestId, callback: grpc.requestCallback<_petPackage_PetList__Output>): grpc.ClientUnaryCall;
  
  HealthCheck(argument: _petPackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_HealthCheckResponse__Output>): grpc.ClientUnaryCall;
  HealthCheck(argument: _petPackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_petPackage_HealthCheckResponse__Output>): grpc.ClientUnaryCall;
  HealthCheck(argument: _petPackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_HealthCheckResponse__Output>): grpc.ClientUnaryCall;
  HealthCheck(argument: _petPackage_Empty, callback: grpc.requestCallback<_petPackage_HealthCheckResponse__Output>): grpc.ClientUnaryCall;
  healthCheck(argument: _petPackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_HealthCheckResponse__Output>): grpc.ClientUnaryCall;
  healthCheck(argument: _petPackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_petPackage_HealthCheckResponse__Output>): grpc.ClientUnaryCall;
  healthCheck(argument: _petPackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_HealthCheckResponse__Output>): grpc.ClientUnaryCall;
  healthCheck(argument: _petPackage_Empty, callback: grpc.requestCallback<_petPackage_HealthCheckResponse__Output>): grpc.ClientUnaryCall;
  
  Insert(argument: _petPackage_Pet, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Pet__Output>): grpc.ClientUnaryCall;
  Insert(argument: _petPackage_Pet, metadata: grpc.Metadata, callback: grpc.requestCallback<_petPackage_Pet__Output>): grpc.ClientUnaryCall;
  Insert(argument: _petPackage_Pet, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Pet__Output>): grpc.ClientUnaryCall;
  Insert(argument: _petPackage_Pet, callback: grpc.requestCallback<_petPackage_Pet__Output>): grpc.ClientUnaryCall;
  insert(argument: _petPackage_Pet, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Pet__Output>): grpc.ClientUnaryCall;
  insert(argument: _petPackage_Pet, metadata: grpc.Metadata, callback: grpc.requestCallback<_petPackage_Pet__Output>): grpc.ClientUnaryCall;
  insert(argument: _petPackage_Pet, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Pet__Output>): grpc.ClientUnaryCall;
  insert(argument: _petPackage_Pet, callback: grpc.requestCallback<_petPackage_Pet__Output>): grpc.ClientUnaryCall;
  
  Insert2(argument: _petPackage_Pet, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Pet__Output>): grpc.ClientUnaryCall;
  Insert2(argument: _petPackage_Pet, metadata: grpc.Metadata, callback: grpc.requestCallback<_petPackage_Pet__Output>): grpc.ClientUnaryCall;
  Insert2(argument: _petPackage_Pet, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Pet__Output>): grpc.ClientUnaryCall;
  Insert2(argument: _petPackage_Pet, callback: grpc.requestCallback<_petPackage_Pet__Output>): grpc.ClientUnaryCall;
  insert2(argument: _petPackage_Pet, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Pet__Output>): grpc.ClientUnaryCall;
  insert2(argument: _petPackage_Pet, metadata: grpc.Metadata, callback: grpc.requestCallback<_petPackage_Pet__Output>): grpc.ClientUnaryCall;
  insert2(argument: _petPackage_Pet, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Pet__Output>): grpc.ClientUnaryCall;
  insert2(argument: _petPackage_Pet, callback: grpc.requestCallback<_petPackage_Pet__Output>): grpc.ClientUnaryCall;
  
  List(argument: _petPackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_PetList__Output>): grpc.ClientUnaryCall;
  List(argument: _petPackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_petPackage_PetList__Output>): grpc.ClientUnaryCall;
  List(argument: _petPackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_PetList__Output>): grpc.ClientUnaryCall;
  List(argument: _petPackage_Empty, callback: grpc.requestCallback<_petPackage_PetList__Output>): grpc.ClientUnaryCall;
  list(argument: _petPackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_PetList__Output>): grpc.ClientUnaryCall;
  list(argument: _petPackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_petPackage_PetList__Output>): grpc.ClientUnaryCall;
  list(argument: _petPackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_PetList__Output>): grpc.ClientUnaryCall;
  list(argument: _petPackage_Empty, callback: grpc.requestCallback<_petPackage_PetList__Output>): grpc.ClientUnaryCall;
  
  Update(argument: _petPackage_Pet, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Pet__Output>): grpc.ClientUnaryCall;
  Update(argument: _petPackage_Pet, metadata: grpc.Metadata, callback: grpc.requestCallback<_petPackage_Pet__Output>): grpc.ClientUnaryCall;
  Update(argument: _petPackage_Pet, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Pet__Output>): grpc.ClientUnaryCall;
  Update(argument: _petPackage_Pet, callback: grpc.requestCallback<_petPackage_Pet__Output>): grpc.ClientUnaryCall;
  update(argument: _petPackage_Pet, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Pet__Output>): grpc.ClientUnaryCall;
  update(argument: _petPackage_Pet, metadata: grpc.Metadata, callback: grpc.requestCallback<_petPackage_Pet__Output>): grpc.ClientUnaryCall;
  update(argument: _petPackage_Pet, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Pet__Output>): grpc.ClientUnaryCall;
  update(argument: _petPackage_Pet, callback: grpc.requestCallback<_petPackage_Pet__Output>): grpc.ClientUnaryCall;
  
}

export interface PetServiceHandlers extends grpc.UntypedServiceImplementation {
  Delete: grpc.handleUnaryCall<_petPackage_PetRequestId__Output, _petPackage_PetList>;
  
  HealthCheck: grpc.handleUnaryCall<_petPackage_Empty__Output, _petPackage_HealthCheckResponse>;
  
  Insert: grpc.handleUnaryCall<_petPackage_Pet__Output, _petPackage_Pet>;
  
  Insert2: grpc.handleUnaryCall<_petPackage_Pet__Output, _petPackage_Pet>;
  
  List: grpc.handleUnaryCall<_petPackage_Empty__Output, _petPackage_PetList>;
  
  Update: grpc.handleUnaryCall<_petPackage_Pet__Output, _petPackage_Pet>;
  
}

export interface PetServiceDefinition extends grpc.ServiceDefinition {
  Delete: MethodDefinition<_petPackage_PetRequestId, _petPackage_PetList, _petPackage_PetRequestId__Output, _petPackage_PetList__Output>
  HealthCheck: MethodDefinition<_petPackage_Empty, _petPackage_HealthCheckResponse, _petPackage_Empty__Output, _petPackage_HealthCheckResponse__Output>
  Insert: MethodDefinition<_petPackage_Pet, _petPackage_Pet, _petPackage_Pet__Output, _petPackage_Pet__Output>
  Insert2: MethodDefinition<_petPackage_Pet, _petPackage_Pet, _petPackage_Pet__Output, _petPackage_Pet__Output>
  List: MethodDefinition<_petPackage_Empty, _petPackage_PetList, _petPackage_Empty__Output, _petPackage_PetList__Output>
  Update: MethodDefinition<_petPackage_Pet, _petPackage_Pet, _petPackage_Pet__Output, _petPackage_Pet__Output>
}
