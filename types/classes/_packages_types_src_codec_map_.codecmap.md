[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/codec/Map"](../modules/_packages_types_src_codec_map_.md) › [CodecMap](_packages_types_src_codec_map_.codecmap.md)

# Class: CodecMap ‹**K, V**›

## Type parameters

▪ **K**: *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

▪ **V**: *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

## Hierarchy

* [Map](_packages_types_src_codec_struct_.struct.md#static-map)‹K, V›

  ↳ **CodecMap**

  ↳ [HashMap](_packages_types_src_codec_hashmap_.hashmap.md)

  ↳ [BTreeMap](_packages_types_src_codec_btreemap_.btreemap.md)

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_packages_types_src_codec_map_.codecmap.md#constructor)

### Properties

* [[Symbol.toStringTag]](_packages_types_src_codec_map_.codecmap.md#readonly-[symbol.tostringtag])
* [registry](_packages_types_src_codec_map_.codecmap.md#readonly-registry)
* [size](_packages_types_src_codec_map_.codecmap.md#readonly-size)
* [Map](_packages_types_src_codec_map_.codecmap.md#static-map)

### Accessors

* [encodedLength](_packages_types_src_codec_map_.codecmap.md#encodedlength)
* [hash](_packages_types_src_codec_map_.codecmap.md#hash)
* [isEmpty](_packages_types_src_codec_map_.codecmap.md#isempty)

### Methods

* [[Symbol.iterator]](_packages_types_src_codec_map_.codecmap.md#[symbol.iterator])
* [clear](_packages_types_src_codec_map_.codecmap.md#clear)
* [delete](_packages_types_src_codec_map_.codecmap.md#delete)
* [entries](_packages_types_src_codec_map_.codecmap.md#entries)
* [eq](_packages_types_src_codec_map_.codecmap.md#eq)
* [forEach](_packages_types_src_codec_map_.codecmap.md#foreach)
* [get](_packages_types_src_codec_map_.codecmap.md#get)
* [has](_packages_types_src_codec_map_.codecmap.md#has)
* [keys](_packages_types_src_codec_map_.codecmap.md#keys)
* [set](_packages_types_src_codec_map_.codecmap.md#set)
* [toHex](_packages_types_src_codec_map_.codecmap.md#tohex)
* [toHuman](_packages_types_src_codec_map_.codecmap.md#tohuman)
* [toJSON](_packages_types_src_codec_map_.codecmap.md#tojson)
* [toRawType](_packages_types_src_codec_map_.codecmap.md#torawtype)
* [toString](_packages_types_src_codec_map_.codecmap.md#tostring)
* [toU8a](_packages_types_src_codec_map_.codecmap.md#tou8a)
* [values](_packages_types_src_codec_map_.codecmap.md#values)

## Constructors

###  constructor

\+ **new CodecMap**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `type`: "BTreeMap" | "HashMap", `keyType`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹K› | keyof InterfaceTypes, `valType`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹V› | keyof InterfaceTypes, `rawValue?`: [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) | string | [Map](_packages_types_src_codec_struct_.struct.md#static-map)‹any, any›): *[CodecMap](_packages_types_src_codec_map_.codecmap.md)*

*Defined in [packages/types/src/codec/Map.ts:100](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/Map.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`type` | "BTreeMap" &#124; "HashMap" |
`keyType` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹K› &#124; keyof InterfaceTypes |
`valType` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹V› &#124; keyof InterfaceTypes |
`rawValue?` | [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) &#124; string &#124; [Map](_packages_types_src_codec_struct_.struct.md#static-map)‹any, any› |

**Returns:** *[CodecMap](_packages_types_src_codec_map_.codecmap.md)*

## Properties

### `Readonly` [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md).[registry](../interfaces/_packages_types_src_types_codec_.codec.md#readonly-registry)*

*Defined in [packages/types/src/codec/Map.ts:94](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/Map.ts#L94)*

___

### `Readonly` size

• **size**: *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

### `Static` Map

▪ **Map**: *MapConstructor*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:36

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/codec/Map.ts:114](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/Map.ts#L114)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Defined in [packages/types/src/codec/Map.ts:127](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/Map.ts#L127)*

**`description`** Returns a hash of the value

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/codec/Map.ts:134](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/Map.ts#L134)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹[K, V]›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

Returns an iterable of entries in the map.

**Returns:** *IterableIterator‹[K, V]›*

___

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

###  entries

▸ **entries**(): *IterableIterator‹[K, V]›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:126

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** *IterableIterator‹[K, V]›*

___

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Map.ts:141](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/Map.ts#L141)*

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

###  keys

▸ **keys**(): *IterableIterator‹K›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

Returns an iterable of keys in the map

**Returns:** *IterableIterator‹K›*

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

*Defined in [packages/types/src/codec/Map.ts:148](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/Map.ts#L148)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Map.ts:155](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/Map.ts#L155)*

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

*Defined in [packages/types/src/codec/Map.ts:168](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/Map.ts#L168)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Map.ts:181](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/Map.ts#L181)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Map.ts:188](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/Map.ts#L188)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/codec/Map.ts:196](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/Map.ts#L196)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

___

###  values

▸ **values**(): *IterableIterator‹V›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:136

Returns an iterable of values in the map

**Returns:** *IterableIterator‹V›*
