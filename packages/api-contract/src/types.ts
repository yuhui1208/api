// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiTypes, DecorateMethod } from '@polkadot/api/types';
import { AccountId, Address, ContractExecResult } from '@polkadot/types/interfaces';
import { Codec, CodecArg } from '@polkadot/types/types';
import { TypeDef } from '@polkadot/types/create/types';

import { ApiPromise, ApiRx } from '@polkadot/api';

export type TypeIndex = number;

export type StringIndex = number;

export enum MetaTypeInfo {
  BuiltinPlain,
  BuiltinTuple,
  BuiltinVec,
  BuiltinVecFixed,
  Enum,
  ClikeEnum,
  Struct,
  TupleStruct,
  Null,
}

export type MetaTypeIdPrimitive = string;

export type MetaTypeIdTuple = TypeIndex[];

export interface MetaTypeIdCustom {
  'custom.name': StringIndex;
  'custom.namespace'?: StringIndex[];
  'custom.params'?: TypeIndex[];
}

export interface MetaTypeIdVec {
  'slice.type': TypeIndex;
}

export interface MetaTypeIdVecFixed {
  'array.len': number;
  'array.type': TypeIndex;
}

export type MetaTypeId = MetaTypeIdPrimitive | MetaTypeIdTuple | MetaTypeIdVec | MetaTypeIdVecFixed | MetaTypeIdCustom;
// MetaTypeIdPrimitive | MetaTypeIdTuple | MetaTypeIdArray | MetaTypeIdCustom;
// export type MetaTypeId = Record<string, any>;

export interface MetaTypeDefClikeEnumVariant {
  name: StringIndex;
  discriminant: number;
}

export interface MetaTypeDefClikeEnum {
  'clike_enum.variants': MetaTypeDefClikeEnumVariant[];
}

export type MetaTypeDefBuiltIn = 'builtin';

export interface MetaTypeDefEnumVariantUnit {
  'unit_variant.name': StringIndex;
}

export interface MetaTypeDefEnumVariantTupleStruct {
  'tuple_struct_variant.name': StringIndex;
  'tuple_struct_variant.types': TypeIndex[];
}

export interface MetaTypeDefEnumVariantStruct {
  'struct_variant.name': StringIndex;
  'struct_variant.fields': MetaTypeDefStructField[];
}

export type MetaTypeDefEnumVariant = MetaTypeDefEnumVariantUnit | MetaTypeDefEnumVariantTupleStruct | MetaTypeDefEnumVariantStruct;

export interface MetaTypeDefEnum {
  'enum.variants': MetaTypeDefEnumVariant[];
}

export interface MetaTypeDefStructField {
  name: StringIndex;
  type: TypeIndex;
}

export type MetaTypeDefUnionField = MetaTypeDefStructField;

export interface MetaTypeDefStruct {
  'struct.fields': MetaTypeDefStructField[];
}

export interface MetaTypeDefTupleStruct {
  'tuple_struct.types': TypeIndex[];
}

export interface MetaTypeDefUnion {
  'union.fields': MetaTypeDefUnionField[];
}

export type MetaTypeDef = MetaTypeDefBuiltIn | MetaTypeDefClikeEnum | MetaTypeDefEnum | MetaTypeDefStruct | MetaTypeDefTupleStruct | MetaTypeDefUnion;

export interface MetaType {
  def: MetaTypeDef;
  id: MetaTypeId | null;
}

export enum MetaRegistryItem {
  String,
  Type,
  TypeDef
}

export interface MetaRegistryJson {
  registry: {
    strings: string[];
    types: MetaType[];
  };
}

export type ApiObject<ApiType extends ApiTypes> = ApiType extends 'rxjs'
  ? ApiRx
  : ApiPromise;

export interface ContractBase<ApiType extends ApiTypes> {
  readonly abi: InterfaceAbi;
  readonly api: ApiObject<ApiType>;
  readonly decorateMethod: DecorateMethod<ApiType>;
  getMessage: (name: string) => ContractMessage;
  messages: ContractMessage[];
}

export interface ContractABITypePre {
  ty: TypeIndex;
  // eslint-disable-next-line camelcase
  display_name: StringIndex[];
}

export interface ContractABIArgBasePre {
  name: StringIndex;
  type: ContractABITypePre;
}

export interface ContractABIArgBase {
  name: string;
  type: TypeDef;
}

export type ContractABIMessageArgPre = ContractABIArgBasePre;

export type ContractABIMessageArg = ContractABIArgBase;

export interface ContractABIMessageBase {
  args: ContractABIMessageArg[];
}

export interface ContractABIMessageBasePre {
  args: ContractABIMessageArgPre[];
}

export interface ContractABIMessageCommon {
  docs?: ContractABIDocs;
  mutates?: boolean;
  selector: string | number;
}

export interface ContractABIMessagePre extends ContractABIMessageCommon, ContractABIMessageBasePre {
  name: StringIndex;
  // eslint-disable-next-line camelcase
  return_type: ContractABITypePre | null;
}

export interface ContractABIMessage extends ContractABIMessageCommon {
  args: ContractABIMessageArg[];
  name: string;
  returnType: TypeDef | null;
}

export interface ContractABIContractCommon {
  docs?: ContractABIDocs;
}

export interface ContractABIContractPre extends ContractABIContractCommon {
  constructors: ContractABIMessagePre[];
  messages: ContractABIMessagePre[];
  name: StringIndex;
  events?: ContractABIEventPre[];
  docs?: ContractABIDocs;
}

export interface ContractABIContract extends ContractABIContractCommon {
  constructors: ContractABIMessage[];
  messages: ContractABIMessage[];
  name: string;
  events?: ContractABIEvent[];
  docs?: ContractABIDocs;
}

export interface ContractABIPre extends MetaRegistryJson {
  storage: ContractABIStoragePre;
  contract: ContractABIContractPre;
}

export interface ContractABI {
  storage: ContractABIStorage;
  contract: ContractABIContract;
}

export interface ContractABIFnArg {
  name: string;
  type: TypeDef;
}

export interface ContractABIMeta {
  args: ContractABIFnArg[];
  isConstant: boolean;
  type: TypeDef | null;
}

export interface ContractABIFn extends ContractABIMeta {
  (...args: CodecArg[]): Uint8Array;
}

export interface ContractABIEventArgBase {
  indexed: boolean;
}

export interface ContractABIEventArgPre extends ContractABIArgBasePre, ContractABIEventArgBase {}

export interface ContractABIEventArg extends ContractABIArgBase, ContractABIEventArgBase {}

export type ContractABIDocs = string[];

export interface ContractABIEventPre {
  args: ContractABIEventArgPre[];
}

export interface ContractABIEvent {
  args: ContractABIEventArg[];
}

export interface ContractABIRangeBase {
  // can be number[] (old) or hex (new)
  'range.offset': number[] | string;
  'range.len': number;
}

export interface ContractABIRangePre extends ContractABIRangeBase {
  'range.elem_type': TypeIndex;
}

export interface ContractABIRange extends ContractABIRangeBase {
  'range.elem_type': TypeDef;
}

export type ContractABIStorageLayoutPre = ContractABIStorageStructPre | ContractABIRangePre;

export type ContractABIStorageLayout = ContractABIStorageStruct | ContractABIRange;

export interface ContractABIStorageStructFieldPre {
  name: StringIndex;
  layout: ContractABIStorageLayoutPre;
}

export interface ContractABIStorageStructField {
  name: string;
  layout: ContractABIStorageLayout;
}

export interface ContractABIStorageStructPre {
  'struct.type': TypeIndex;
  'struct.fields': ContractABIStorageStructFieldPre[];
}

export interface ContractABIStorageStruct {
  'struct.type': TypeDef;
  'struct.fields': ContractABIStorageStructField[];
}

export type ContractABIStoragePre = ContractABIStorageStructPre;

export type ContractABIStorage = ContractABIStorageStruct;

export interface ContractMessage {
  index: number;
  fn: ContractABIFn;
  def: ContractABIMessage;
}

export type AbiConstructors = ContractABIFn[];

export type AbiMessages = Record<string, ContractABIFn>;

export interface InterfaceAbi {
  readonly abi: ContractABI;
  readonly constructors: AbiConstructors;
  readonly messages: AbiMessages;
}

export interface InterfaceContractCalls {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [index: string]: Function;
}

export interface InterfaceContract {
  readonly address: Address;
  readonly calls: InterfaceContractCalls;
}

export interface ContractCallOutcome {
  time: number;
  result: ContractExecResult;
  origin: AccountId;
  output: Codec | null;
  params: any[];
  isSuccess: boolean;
  message: ContractABIMessage;
}
