[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/codec/BTreeMap"](../modules/_packages_types_src_codec_btreemap_.md) › [BTreeMap](_packages_types_src_codec_btreemap_.btreemap.md)

# Class: BTreeMap ‹**K, V**›

## Type parameters

▪ **K**: *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

▪ **V**: *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

## Hierarchy

  ↳ [CodecMap](_packages_types_src_codec_map_.codecmap.md)‹K, V›

  ↳ **BTreeMap**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_packages_types_src_codec_btreemap_.btreemap.md#constructor)

### Properties

* [registry](_packages_types_src_codec_btreemap_.btreemap.md#readonly-registry)
* [size](_packages_types_src_codec_btreemap_.btreemap.md#readonly-size)

### Accessors

* [encodedLength](_packages_types_src_codec_btreemap_.btreemap.md#encodedlength)
* [hash](_packages_types_src_codec_btreemap_.btreemap.md#hash)
* [isEmpty](_packages_types_src_codec_btreemap_.btreemap.md#isempty)

### Methods

* [clear](_packages_types_src_codec_btreemap_.btreemap.md#clear)
* [delete](_packages_types_src_codec_btreemap_.btreemap.md#delete)
* [eq](_packages_types_src_codec_btreemap_.btreemap.md#eq)
* [forEach](_packages_types_src_codec_btreemap_.btreemap.md#foreach)
* [get](_packages_types_src_codec_btreemap_.btreemap.md#get)
* [has](_packages_types_src_codec_btreemap_.btreemap.md#has)
* [set](_packages_types_src_codec_btreemap_.btreemap.md#set)
* [toHex](_packages_types_src_codec_btreemap_.btreemap.md#tohex)
* [toHuman](_packages_types_src_codec_btreemap_.btreemap.md#tohuman)
* [toJSON](_packages_types_src_codec_btreemap_.btreemap.md#tojson)
* [toRawType](_packages_types_src_codec_btreemap_.btreemap.md#torawtype)
* [toString](_packages_types_src_codec_btreemap_.btreemap.md#tostring)
* [toU8a](_packages_types_src_codec_btreemap_.btreemap.md#tou8a)
* [with](_packages_types_src_codec_btreemap_.btreemap.md#static-with)

## Constructors

###  constructor

\+ **new BTreeMap**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `type`: "BTreeMap" | "HashMap", `keyType`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹K› | keyof InterfaceTypes, `valType`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹V› | keyof InterfaceTypes, `rawValue?`: [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) | string | [Map](_packages_types_src_codec_struct_.struct.md#static-map)‹any, any›): *[BTreeMap](_packages_types_src_codec_btreemap_.btreemap.md)*

*Inherited from [CodecMap](_packages_types_src_codec_map_.codecmap.md).[constructor](_packages_types_src_codec_map_.codecmap.md#constructor)*

*Defined in [packages/types/src/codec/Map.ts:100](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/Map.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`type` | "BTreeMap" &#124; "HashMap" |
`keyType` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹K› &#124; keyof InterfaceTypes |
`valType` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹V› &#124; keyof InterfaceTypes |
`rawValue?` | [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) &#124; string &#124; [Map](_packages_types_src_codec_struct_.struct.md#static-map)‹any, any› |

**Returns:** *[BTreeMap](_packages_types_src_codec_btreemap_.btreemap.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md).[registry](../interfaces/_packages_types_src_types_codec_.codec.md#readonly-registry)*

*Inherited from [CodecMap](_packages_types_src_codec_map_.codecmap.md).[registry](_packages_types_src_codec_map_.codecmap.md#readonly-registry)*

*Defined in [packages/types/src/codec/Map.ts:94](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/Map.ts#L94)*

___

### `Readonly` size

• **size**: *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:28

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [CodecMap](_packages_types_src_codec_map_.codecmap.md).[encodedLength](_packages_types_src_codec_map_.codecmap.md#encodedlength)*

*Defined in [packages/types/src/codec/Map.ts:114](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/Map.ts#L114)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [CodecMap](_packages_types_src_codec_map_.codecmap.md).[hash](_packages_types_src_codec_map_.codecmap.md#hash)*

*Defined in [packages/types/src/codec/Map.ts:127](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/Map.ts#L127)*

**`description`** Returns a hash of the value

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [CodecMap](_packages_types_src_codec_map_.codecmap.md).[isEmpty](_packages_types_src_codec_map_.codecmap.md#isempty)*

*Defined in [packages/types/src/codec/Map.ts:134](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/Map.ts#L134)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  clear

▸ **clear**(): *void*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:22

**Returns:** *void*

___

###  delete

▸ **delete**(`key`: K): *boolean*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *boolean*

___

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [CodecMap](_packages_types_src_codec_map_.codecmap.md).[eq](_packages_types_src_codec_map_.codecmap.md#eq)*

*Defined in [packages/types/src/codec/Map.ts:141](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/Map.ts#L141)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:24

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: V, `key`: K, `map`: [Map](_packages_types_src_codec_struct_.struct.md#static-map)‹K, V›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | V |
`key` | K |
`map` | [Map](_packages_types_src_codec_struct_.struct.md#static-map)‹K, V› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  get

▸ **get**(`key`: K): *V | undefined*

*Inherited from [CodecMap](_packages_types_src_codec_map_.codecmap.md).[get](_packages_types_src_codec_map_.codecmap.md#get)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *V | undefined*

___

###  has

▸ **has**(`key`: K): *boolean*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *boolean*

___

###  set

▸ **set**(`key`: K, `value`: V): *this*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`value` | V |

**Returns:** *this*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [CodecMap](_packages_types_src_codec_map_.codecmap.md).[toHex](_packages_types_src_codec_map_.codecmap.md#tohex)*

*Defined in [packages/types/src/codec/Map.ts:148](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/Map.ts#L148)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [CodecMap](_packages_types_src_codec_map_.codecmap.md).[toHuman](_packages_types_src_codec_map_.codecmap.md#tohuman)*

*Defined in [packages/types/src/codec/Map.ts:155](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/Map.ts#L155)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [CodecMap](_packages_types_src_codec_map_.codecmap.md).[toJSON](_packages_types_src_codec_map_.codecmap.md#tojson)*

*Defined in [packages/types/src/codec/Map.ts:168](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/Map.ts#L168)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [CodecMap](_packages_types_src_codec_map_.codecmap.md).[toRawType](_packages_types_src_codec_map_.codecmap.md#torawtype)*

*Defined in [packages/types/src/codec/Map.ts:181](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/Map.ts#L181)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [CodecMap](_packages_types_src_codec_map_.codecmap.md).[toString](_packages_types_src_codec_map_.codecmap.md#tostring)*

*Defined in [packages/types/src/codec/Map.ts:188](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/Map.ts#L188)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Inherited from [CodecMap](_packages_types_src_codec_map_.codecmap.md).[toU8a](_packages_types_src_codec_map_.codecmap.md#tou8a)*

*Defined in [packages/types/src/codec/Map.ts:196](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/Map.ts#L196)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**‹**K**, **V**›(`keyType`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹K› | keyof InterfaceTypes, `valType`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹V› | keyof InterfaceTypes): *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹[CodecMap](_packages_types_src_codec_map_.codecmap.md)‹K, V››*

*Defined in [packages/types/src/codec/BTreeMap.ts:10](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/BTreeMap.ts#L10)*

**Type parameters:**

▪ **K**: *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

▪ **V**: *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`keyType` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹K› &#124; keyof InterfaceTypes |
`valType` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹V› &#124; keyof InterfaceTypes |

**Returns:** *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹[CodecMap](_packages_types_src_codec_map_.codecmap.md)‹K, V››*
