[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/primitive/Type"](../modules/_packages_types_src_primitive_type_.md) › [Type](_packages_types_src_primitive_type_.type.md)

# Class: Type

**`name`** Type

**`description`** 
This is a extended version of String, specifically to handle types. Here we rely fully
on what string provides us, however we also adjust the types received from the runtime,
i.e. we remove the `T::` prefixes found in some types for consistency across implementation.

## Hierarchy

  ↳ [Text](_packages_types_src_primitive_text_.text.md)

  ↳ **Type**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Indexable

* \[ **index**: *number*\]: string

**`name`** Type

**`description`** 
This is a extended version of String, specifically to handle types. Here we rely fully
on what string provides us, however we also adjust the types received from the runtime,
i.e. we remove the `T::` prefixes found in some types for consistency across implementation.

## Index

### Constructors

* [constructor](_packages_types_src_primitive_type_.type.md#constructor)

### Properties

* [registry](_packages_types_src_primitive_type_.type.md#readonly-registry)

### Accessors

* [encodedLength](_packages_types_src_primitive_type_.type.md#encodedlength)
* [hash](_packages_types_src_primitive_type_.type.md#hash)
* [isEmpty](_packages_types_src_primitive_type_.type.md#isempty)
* [length](_packages_types_src_primitive_type_.type.md#length)

### Methods

* [eq](_packages_types_src_primitive_type_.type.md#eq)
* [setOverride](_packages_types_src_primitive_type_.type.md#setoverride)
* [toHex](_packages_types_src_primitive_type_.type.md#tohex)
* [toHuman](_packages_types_src_primitive_type_.type.md#tohuman)
* [toJSON](_packages_types_src_primitive_type_.type.md#tojson)
* [toRawType](_packages_types_src_primitive_type_.type.md#torawtype)
* [toString](_packages_types_src_primitive_type_.type.md#tostring)
* [toU8a](_packages_types_src_primitive_type_.type.md#tou8a)

## Constructors

###  constructor

\+ **new Type**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `value`: [Text](_packages_types_src_primitive_text_.text.md) | [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) | string): *[Type](_packages_types_src_primitive_type_.type.md)*

*Overrides [Text](_packages_types_src_primitive_text_.text.md).[constructor](_packages_types_src_primitive_text_.text.md#constructor)*

*Defined in [packages/types/src/primitive/Type.ts:17](https://github.com/polkadot-js/api/blob/dac3261a16/packages/types/src/primitive/Type.ts#L17)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) | - |
`value` | [Text](_packages_types_src_primitive_text_.text.md) &#124; [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) &#124; string | "" |

**Returns:** *[Type](_packages_types_src_primitive_type_.type.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md).[registry](../interfaces/_packages_types_src_types_codec_.codec.md#readonly-registry)*

*Inherited from [Text](_packages_types_src_primitive_text_.text.md).[registry](_packages_types_src_primitive_text_.text.md#readonly-registry)*

*Defined in [packages/types/src/primitive/Text.ts:50](https://github.com/polkadot-js/api/blob/dac3261a16/packages/types/src/primitive/Text.ts#L50)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Text](_packages_types_src_primitive_text_.text.md).[encodedLength](_packages_types_src_primitive_text_.text.md#encodedlength)*

*Defined in [packages/types/src/primitive/Text.ts:63](https://github.com/polkadot-js/api/blob/dac3261a16/packages/types/src/primitive/Text.ts#L63)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [Text](_packages_types_src_primitive_text_.text.md).[hash](_packages_types_src_primitive_text_.text.md#hash)*

*Defined in [packages/types/src/primitive/Text.ts:70](https://github.com/polkadot-js/api/blob/dac3261a16/packages/types/src/primitive/Text.ts#L70)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Text](_packages_types_src_primitive_text_.text.md).[isEmpty](_packages_types_src_primitive_text_.text.md#isempty)*

*Defined in [packages/types/src/primitive/Text.ts:77](https://github.com/polkadot-js/api/blob/dac3261a16/packages/types/src/primitive/Text.ts#L77)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [Text](_packages_types_src_primitive_text_.text.md).[length](_packages_types_src_primitive_text_.text.md#length)*

*Overrides [RegistryMetadataText](../interfaces/_packages_types_src_types_registry_.registrymetadatatext.md).[length](../interfaces/_packages_types_src_types_registry_.registrymetadatatext.md#readonly-length)*

*Defined in [packages/types/src/primitive/Text.ts:84](https://github.com/polkadot-js/api/blob/dac3261a16/packages/types/src/primitive/Text.ts#L84)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Text](_packages_types_src_primitive_text_.text.md).[eq](_packages_types_src_primitive_text_.text.md#eq)*

*Defined in [packages/types/src/primitive/Text.ts:92](https://github.com/polkadot-js/api/blob/dac3261a16/packages/types/src/primitive/Text.ts#L92)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  setOverride

▸ **setOverride**(`override`: string): *void*

*Inherited from [Text](_packages_types_src_primitive_text_.text.md).[setOverride](_packages_types_src_primitive_text_.text.md#setoverride)*

*Defined in [packages/types/src/primitive/Text.ts:101](https://github.com/polkadot-js/api/blob/dac3261a16/packages/types/src/primitive/Text.ts#L101)*

**`description`** Set an override value for this

**Parameters:**

Name | Type |
------ | ------ |
`override` | string |

**Returns:** *void*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Text](_packages_types_src_primitive_text_.text.md).[toHex](_packages_types_src_primitive_text_.text.md#tohex)*

*Defined in [packages/types/src/primitive/Text.ts:108](https://github.com/polkadot-js/api/blob/dac3261a16/packages/types/src/primitive/Text.ts#L108)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(): *string*

*Inherited from [Text](_packages_types_src_primitive_text_.text.md).[toHuman](_packages_types_src_primitive_text_.text.md#tohuman)*

*Defined in [packages/types/src/primitive/Text.ts:117](https://github.com/polkadot-js/api/blob/dac3261a16/packages/types/src/primitive/Text.ts#L117)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Text](_packages_types_src_primitive_text_.text.md).[toJSON](_packages_types_src_primitive_text_.text.md#tojson)*

*Defined in [packages/types/src/primitive/Text.ts:124](https://github.com/polkadot-js/api/blob/dac3261a16/packages/types/src/primitive/Text.ts#L124)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Overrides [Text](_packages_types_src_primitive_text_.text.md).[toRawType](_packages_types_src_primitive_text_.text.md#torawtype)*

*Defined in [packages/types/src/primitive/Type.ts:27](https://github.com/polkadot-js/api/blob/dac3261a16/packages/types/src/primitive/Type.ts#L27)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Text](_packages_types_src_primitive_text_.text.md).[toString](_packages_types_src_primitive_text_.text.md#tostring)*

*Overrides [RegistryMetadataText](../interfaces/_packages_types_src_types_registry_.registrymetadatatext.md).[toString](../interfaces/_packages_types_src_types_registry_.registrymetadatatext.md#tostring)*

*Defined in [packages/types/src/primitive/Text.ts:138](https://github.com/polkadot-js/api/blob/dac3261a16/packages/types/src/primitive/Text.ts#L138)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Text](_packages_types_src_primitive_text_.text.md).[toU8a](_packages_types_src_primitive_text_.text.md#tou8a)*

*Defined in [packages/types/src/primitive/Text.ts:146](https://github.com/polkadot-js/api/blob/dac3261a16/packages/types/src/primitive/Text.ts#L146)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*
