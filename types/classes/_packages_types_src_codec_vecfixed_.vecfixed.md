[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/codec/VecFixed"](../modules/_packages_types_src_codec_vecfixed_.md) › [VecFixed](_packages_types_src_codec_vecfixed_.vecfixed.md)

# Class: VecFixed ‹**T**›

**`name`** VecFixed

**`description`** 
This manages codec arrays of a fixed length

## Type parameters

▪ **T**: *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

## Hierarchy

  ↳ [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md)‹T›

  ↳ **VecFixed**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Indexable

* \[ **n**: *number*\]: T

**`name`** VecFixed

**`description`** 
This manages codec arrays of a fixed length

## Index

### Constructors

* [constructor](_packages_types_src_codec_vecfixed_.vecfixed.md#constructor)

### Properties

* [registry](_packages_types_src_codec_vecfixed_.vecfixed.md#readonly-registry)

### Accessors

* [Type](_packages_types_src_codec_vecfixed_.vecfixed.md#type)
* [encodedLength](_packages_types_src_codec_vecfixed_.vecfixed.md#encodedlength)
* [hash](_packages_types_src_codec_vecfixed_.vecfixed.md#hash)
* [isEmpty](_packages_types_src_codec_vecfixed_.vecfixed.md#isempty)
* [length](_packages_types_src_codec_vecfixed_.vecfixed.md#length)

### Methods

* [concat](_packages_types_src_codec_vecfixed_.vecfixed.md#concat)
* [eq](_packages_types_src_codec_vecfixed_.vecfixed.md#eq)
* [filter](_packages_types_src_codec_vecfixed_.vecfixed.md#filter)
* [includes](_packages_types_src_codec_vecfixed_.vecfixed.md#includes)
* [map](_packages_types_src_codec_vecfixed_.vecfixed.md#map)
* [toArray](_packages_types_src_codec_vecfixed_.vecfixed.md#toarray)
* [toHex](_packages_types_src_codec_vecfixed_.vecfixed.md#tohex)
* [toHuman](_packages_types_src_codec_vecfixed_.vecfixed.md#tohuman)
* [toJSON](_packages_types_src_codec_vecfixed_.vecfixed.md#tojson)
* [toRawType](_packages_types_src_codec_vecfixed_.vecfixed.md#torawtype)
* [toString](_packages_types_src_codec_vecfixed_.vecfixed.md#tostring)
* [toU8a](_packages_types_src_codec_vecfixed_.vecfixed.md#tou8a)
* [with](_packages_types_src_codec_vecfixed_.vecfixed.md#static-with)

## Constructors

###  constructor

\+ **new VecFixed**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `Type`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹T› | keyof InterfaceTypes, `length`: number, `value`: [VecFixed](_packages_types_src_codec_vecfixed_.vecfixed.md)‹any› | [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) | string | any[]): *[VecFixed](_packages_types_src_codec_vecfixed_.vecfixed.md)*

*Overrides void*

*Defined in [packages/types/src/codec/VecFixed.ts:18](https://github.com/polkadot-js/api/blob/918bb73547/packages/types/src/codec/VecFixed.ts#L18)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) | - |
`Type` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹T› &#124; keyof InterfaceTypes | - |
`length` | number | - |
`value` | [VecFixed](_packages_types_src_codec_vecfixed_.vecfixed.md)‹any› &#124; [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) &#124; string &#124; any[] | [] as any[] |

**Returns:** *[VecFixed](_packages_types_src_codec_vecfixed_.vecfixed.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md).[registry](../interfaces/_packages_types_src_types_codec_.codec.md#readonly-registry)*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[registry](_packages_types_src_codec_abstractarray_.abstractarray.md#readonly-registry)*

*Defined in [packages/types/src/codec/AbstractArray.ts:22](https://github.com/polkadot-js/api/blob/918bb73547/packages/types/src/codec/AbstractArray.ts#L22)*

## Accessors

###  Type

• **get Type**(): *string*

*Defined in [packages/types/src/codec/VecFixed.ts:58](https://github.com/polkadot-js/api/blob/918bb73547/packages/types/src/codec/VecFixed.ts#L58)*

**`description`** The type for the items

**Returns:** *string*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[encodedLength](_packages_types_src_codec_abstractarray_.abstractarray.md#encodedlength)*

*Defined in [packages/types/src/codec/VecFixed.ts:65](https://github.com/polkadot-js/api/blob/918bb73547/packages/types/src/codec/VecFixed.ts#L65)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[hash](_packages_types_src_codec_abstractarray_.abstractarray.md#hash)*

*Defined in [packages/types/src/codec/AbstractArray.ts:42](https://github.com/polkadot-js/api/blob/918bb73547/packages/types/src/codec/AbstractArray.ts#L42)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[isEmpty](_packages_types_src_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [packages/types/src/codec/AbstractArray.ts:49](https://github.com/polkadot-js/api/blob/918bb73547/packages/types/src/codec/AbstractArray.ts#L49)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[length](_packages_types_src_codec_abstractarray_.abstractarray.md#length)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:56](https://github.com/polkadot-js/api/blob/918bb73547/packages/types/src/codec/AbstractArray.ts#L56)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  concat

▸ **concat**(`other`: T[]): *T[]*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[concat](_packages_types_src_codec_abstractarray_.abstractarray.md#concat)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:141](https://github.com/polkadot-js/api/blob/918bb73547/packages/types/src/codec/AbstractArray.ts#L141)*

**`description`** Concatenates two arrays

**Parameters:**

Name | Type |
------ | ------ |
`other` | T[] |

**Returns:** *T[]*

___

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[eq](_packages_types_src_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [packages/types/src/codec/AbstractArray.ts:64](https://github.com/polkadot-js/api/blob/918bb73547/packages/types/src/codec/AbstractArray.ts#L64)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: unknown): *T[]*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[filter](_packages_types_src_codec_abstractarray_.abstractarray.md#filter)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:148](https://github.com/polkadot-js/api/blob/918bb73547/packages/types/src/codec/AbstractArray.ts#L148)*

**`description`** Filters the array with the callback

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: T, `index`: number, `array`: T[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`index` | number |
`array` | T[] |

▪`Optional`  **thisArg**: *unknown*

**Returns:** *T[]*

___

###  includes

▸ **includes**(`check`: unknown): *boolean*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[includes](_packages_types_src_codec_abstractarray_.abstractarray.md#includes)*

*Defined in [packages/types/src/codec/AbstractArray.ts:162](https://github.com/polkadot-js/api/blob/918bb73547/packages/types/src/codec/AbstractArray.ts#L162)*

**`description`** Checks if the array includes a specific value

**Parameters:**

Name | Type |
------ | ------ |
`check` | unknown |

**Returns:** *boolean*

___

###  map

▸ **map**‹**U**›(`callbackfn`: function, `thisArg?`: unknown): *U[]*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[map](_packages_types_src_codec_abstractarray_.abstractarray.md#map)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:155](https://github.com/polkadot-js/api/blob/918bb73547/packages/types/src/codec/AbstractArray.ts#L155)*

**`description`** Maps the array with the callback

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: T, `index`: number, `array`: T[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`index` | number |
`array` | T[] |

▪`Optional`  **thisArg**: *unknown*

**Returns:** *U[]*

___

###  toArray

▸ **toArray**(): *T[]*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[toArray](_packages_types_src_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [packages/types/src/codec/AbstractArray.ts:71](https://github.com/polkadot-js/api/blob/918bb73547/packages/types/src/codec/AbstractArray.ts#L71)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *T[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[toHex](_packages_types_src_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [packages/types/src/codec/AbstractArray.ts:78](https://github.com/polkadot-js/api/blob/918bb73547/packages/types/src/codec/AbstractArray.ts#L78)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[toHuman](_packages_types_src_codec_abstractarray_.abstractarray.md#tohuman)*

*Defined in [packages/types/src/codec/AbstractArray.ts:85](https://github.com/polkadot-js/api/blob/918bb73547/packages/types/src/codec/AbstractArray.ts#L85)*

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

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[toJSON](_packages_types_src_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [packages/types/src/codec/AbstractArray.ts:94](https://github.com/polkadot-js/api/blob/918bb73547/packages/types/src/codec/AbstractArray.ts#L94)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Overrides [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[toRawType](_packages_types_src_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [packages/types/src/codec/VecFixed.ts:82](https://github.com/polkadot-js/api/blob/918bb73547/packages/types/src/codec/VecFixed.ts#L82)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[toString](_packages_types_src_codec_abstractarray_.abstractarray.md#tostring)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:108](https://github.com/polkadot-js/api/blob/918bb73547/packages/types/src/codec/AbstractArray.ts#L108)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Overrides [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[toU8a](_packages_types_src_codec_abstractarray_.abstractarray.md#tou8a)*

*Defined in [packages/types/src/codec/VecFixed.ts:69](https://github.com/polkadot-js/api/blob/918bb73547/packages/types/src/codec/VecFixed.ts#L69)*

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**‹**O**›(`Type`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹O› | keyof InterfaceTypes, `length`: number): *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹[VecFixed](_packages_types_src_codec_vecfixed_.vecfixed.md)‹O››*

*Defined in [packages/types/src/codec/VecFixed.ts:47](https://github.com/polkadot-js/api/blob/918bb73547/packages/types/src/codec/VecFixed.ts#L47)*

**Type parameters:**

▪ **O**: *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹O› &#124; keyof InterfaceTypes |
`length` | number |

**Returns:** *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹[VecFixed](_packages_types_src_codec_vecfixed_.vecfixed.md)‹O››*
