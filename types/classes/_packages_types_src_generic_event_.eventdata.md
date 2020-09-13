[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/generic/Event"](../modules/_packages_types_src_generic_event_.md) › [EventData](_packages_types_src_generic_event_.eventdata.md)

# Class: EventData

**`name`** EventData

**`description`** 
Wrapper for the actual data that forms part of an [Event](_packages_types_src_generic_event_.event.md)

## Hierarchy

  ↳ [Tuple](_packages_types_src_codec_tuple_.tuple.md)

  ↳ **EventData**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Indexable

* \[ **n**: *number*\]: [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

**`name`** EventData

**`description`** 
Wrapper for the actual data that forms part of an [Event](_packages_types_src_generic_event_.event.md)

## Index

### Constructors

* [constructor](_packages_types_src_generic_event_.eventdata.md#constructor)

### Properties

* [registry](_packages_types_src_generic_event_.eventdata.md#readonly-registry)

### Accessors

* [Types](_packages_types_src_generic_event_.eventdata.md#types)
* [encodedLength](_packages_types_src_generic_event_.eventdata.md#encodedlength)
* [hash](_packages_types_src_generic_event_.eventdata.md#hash)
* [isEmpty](_packages_types_src_generic_event_.eventdata.md#isempty)
* [length](_packages_types_src_generic_event_.eventdata.md#length)
* [meta](_packages_types_src_generic_event_.eventdata.md#meta)
* [method](_packages_types_src_generic_event_.eventdata.md#method)
* [section](_packages_types_src_generic_event_.eventdata.md#section)
* [typeDef](_packages_types_src_generic_event_.eventdata.md#typedef)

### Methods

* [concat](_packages_types_src_generic_event_.eventdata.md#concat)
* [eq](_packages_types_src_generic_event_.eventdata.md#eq)
* [filter](_packages_types_src_generic_event_.eventdata.md#filter)
* [includes](_packages_types_src_generic_event_.eventdata.md#includes)
* [map](_packages_types_src_generic_event_.eventdata.md#map)
* [toArray](_packages_types_src_generic_event_.eventdata.md#toarray)
* [toHex](_packages_types_src_generic_event_.eventdata.md#tohex)
* [toHuman](_packages_types_src_generic_event_.eventdata.md#tohuman)
* [toJSON](_packages_types_src_generic_event_.eventdata.md#tojson)
* [toRawType](_packages_types_src_generic_event_.eventdata.md#torawtype)
* [toString](_packages_types_src_generic_event_.eventdata.md#tostring)
* [toU8a](_packages_types_src_generic_event_.eventdata.md#tou8a)
* [with](_packages_types_src_generic_event_.eventdata.md#static-with)

## Constructors

###  constructor

\+ **new EventData**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `Types`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)[], `value`: [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array), `typeDef`: TypeDef[], `meta`: [RegistryMetadataEvent](../interfaces/_packages_types_src_types_registry_.registrymetadataevent.md), `section`: string, `method`: string): *[EventData](_packages_types_src_generic_event_.eventdata.md)*

*Overrides [Tuple](_packages_types_src_codec_tuple_.tuple.md).[constructor](_packages_types_src_codec_tuple_.tuple.md#constructor)*

*Defined in [packages/types/src/generic/Event.ts:26](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/generic/Event.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`Types` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)[] |
`value` | [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) |
`typeDef` | TypeDef[] |
`meta` | [RegistryMetadataEvent](../interfaces/_packages_types_src_types_registry_.registrymetadataevent.md) |
`section` | string |
`method` | string |

**Returns:** *[EventData](_packages_types_src_generic_event_.eventdata.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md).[registry](../interfaces/_packages_types_src_types_codec_.codec.md#readonly-registry)*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[registry](_packages_types_src_codec_abstractarray_.abstractarray.md#readonly-registry)*

*Defined in [packages/types/src/codec/AbstractArray.ts:22](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/AbstractArray.ts#L22)*

## Accessors

###  Types

• **get Types**(): *string[]*

*Inherited from [Tuple](_packages_types_src_codec_tuple_.tuple.md).[Types](_packages_types_src_codec_tuple_.tuple.md#types)*

*Defined in [packages/types/src/codec/Tuple.ts:90](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/Tuple.ts#L90)*

**`description`** The types definition of the tuple

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Tuple](_packages_types_src_codec_tuple_.tuple.md).[encodedLength](_packages_types_src_codec_tuple_.tuple.md#encodedlength)*

*Overrides [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[encodedLength](_packages_types_src_codec_abstractarray_.abstractarray.md#encodedlength)*

*Defined in [packages/types/src/codec/Tuple.ts:79](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/Tuple.ts#L79)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[hash](_packages_types_src_codec_abstractarray_.abstractarray.md#hash)*

*Defined in [packages/types/src/codec/AbstractArray.ts:42](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/AbstractArray.ts#L42)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[isEmpty](_packages_types_src_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [packages/types/src/codec/AbstractArray.ts:49](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/AbstractArray.ts#L49)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[length](_packages_types_src_codec_abstractarray_.abstractarray.md#length)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:56](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/AbstractArray.ts#L56)*

**`description`** The length of the value

**Returns:** *number*

___

###  meta

• **get meta**(): *EventMetadataLatest*

*Defined in [packages/types/src/generic/Event.ts:40](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/generic/Event.ts#L40)*

**`description`** The wrapped [[EventMetadata]]

**Returns:** *EventMetadataLatest*

___

###  method

• **get method**(): *string*

*Defined in [packages/types/src/generic/Event.ts:47](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/generic/Event.ts#L47)*

**`description`** The method as a string

**Returns:** *string*

___

###  section

• **get section**(): *string*

*Defined in [packages/types/src/generic/Event.ts:54](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/generic/Event.ts#L54)*

**`description`** The section as a string

**Returns:** *string*

___

###  typeDef

• **get typeDef**(): *TypeDef[]*

*Defined in [packages/types/src/generic/Event.ts:61](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/generic/Event.ts#L61)*

**`description`** The [[TypeDef]] for this event

**Returns:** *TypeDef[]*

## Methods

###  concat

▸ **concat**(`other`: [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]): *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[concat](_packages_types_src_codec_abstractarray_.abstractarray.md#concat)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:141](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/AbstractArray.ts#L141)*

**`description`** Concatenates two arrays

**Parameters:**

Name | Type |
------ | ------ |
`other` | [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[] |

**Returns:** *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]*

___

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[eq](_packages_types_src_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [packages/types/src/codec/AbstractArray.ts:64](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/AbstractArray.ts#L64)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: unknown): *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[filter](_packages_types_src_codec_abstractarray_.abstractarray.md#filter)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:148](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/AbstractArray.ts#L148)*

**`description`** Filters the array with the callback

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: [Codec](../interfaces/_packages_types_src_types_codec_.codec.md), `index`: number, `array`: [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](../interfaces/_packages_types_src_types_codec_.codec.md) |
`index` | number |
`array` | [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[] |

▪`Optional`  **thisArg**: *unknown*

**Returns:** *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]*

___

###  includes

▸ **includes**(`check`: unknown): *boolean*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[includes](_packages_types_src_codec_abstractarray_.abstractarray.md#includes)*

*Defined in [packages/types/src/codec/AbstractArray.ts:162](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/AbstractArray.ts#L162)*

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

*Defined in [packages/types/src/codec/AbstractArray.ts:155](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/AbstractArray.ts#L155)*

**`description`** Maps the array with the callback

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: [Codec](../interfaces/_packages_types_src_types_codec_.codec.md), `index`: number, `array`: [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](../interfaces/_packages_types_src_types_codec_.codec.md) |
`index` | number |
`array` | [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[] |

▪`Optional`  **thisArg**: *unknown*

**Returns:** *U[]*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[toArray](_packages_types_src_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [packages/types/src/codec/AbstractArray.ts:71](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/AbstractArray.ts#L71)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[toHex](_packages_types_src_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [packages/types/src/codec/AbstractArray.ts:78](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/AbstractArray.ts#L78)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[toHuman](_packages_types_src_codec_abstractarray_.abstractarray.md#tohuman)*

*Defined in [packages/types/src/codec/AbstractArray.ts:85](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/AbstractArray.ts#L85)*

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

*Defined in [packages/types/src/codec/AbstractArray.ts:94](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/AbstractArray.ts#L94)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Tuple](_packages_types_src_codec_tuple_.tuple.md).[toRawType](_packages_types_src_codec_tuple_.tuple.md#torawtype)*

*Overrides [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[toRawType](_packages_types_src_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [packages/types/src/codec/Tuple.ts:99](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/Tuple.ts#L99)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Tuple](_packages_types_src_codec_tuple_.tuple.md).[toString](_packages_types_src_codec_tuple_.tuple.md#tostring)*

*Overrides [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[toString](_packages_types_src_codec_abstractarray_.abstractarray.md#tostring)*

*Defined in [packages/types/src/codec/Tuple.ts:114](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/Tuple.ts#L114)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Tuple](_packages_types_src_codec_tuple_.tuple.md).[toU8a](_packages_types_src_codec_tuple_.tuple.md#tou8a)*

*Overrides [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[toU8a](_packages_types_src_codec_abstractarray_.abstractarray.md#tou8a)*

*Defined in [packages/types/src/codec/Tuple.ts:123](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/Tuple.ts#L123)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**(`Types`: TupleTypes): *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹[Tuple](_packages_types_src_codec_tuple_.tuple.md)›*

*Inherited from [Tuple](_packages_types_src_codec_tuple_.tuple.md).[with](_packages_types_src_codec_tuple_.tuple.md#static-with)*

*Defined in [packages/types/src/codec/Tuple.ts:68](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/Tuple.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | TupleTypes |

**Returns:** *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹[Tuple](_packages_types_src_codec_tuple_.tuple.md)›*
