[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/primitive/Null"](../modules/_packages_types_src_primitive_null_.md) › [Null](_packages_types_src_primitive_null_.null.md)

# Class: Null

**`name`** Null

**`description`** 
Implements a type that does not contain anything (apart from `null`)

## Hierarchy

* **Null**

  ↳ [DoNotConstruct](_packages_types_src_primitive_donotconstruct_.donotconstruct.md)

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_packages_types_src_primitive_null_.null.md#constructor)

### Properties

* [registry](_packages_types_src_primitive_null_.null.md#readonly-registry)

### Accessors

* [encodedLength](_packages_types_src_primitive_null_.null.md#encodedlength)
* [hash](_packages_types_src_primitive_null_.null.md#hash)
* [isEmpty](_packages_types_src_primitive_null_.null.md#isempty)

### Methods

* [eq](_packages_types_src_primitive_null_.null.md#eq)
* [toHex](_packages_types_src_primitive_null_.null.md#tohex)
* [toHuman](_packages_types_src_primitive_null_.null.md#tohuman)
* [toJSON](_packages_types_src_primitive_null_.null.md#tojson)
* [toRawType](_packages_types_src_primitive_null_.null.md#torawtype)
* [toString](_packages_types_src_primitive_null_.null.md#tostring)
* [toU8a](_packages_types_src_primitive_null_.null.md#tou8a)

## Constructors

###  constructor

\+ **new Null**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)): *[Null](_packages_types_src_primitive_null_.null.md)*

*Defined in [packages/types/src/primitive/Null.ts:16](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/primitive/Null.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |

**Returns:** *[Null](_packages_types_src_primitive_null_.null.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md).[registry](../interfaces/_packages_types_src_types_codec_.codec.md#readonly-registry)*

*Defined in [packages/types/src/primitive/Null.ts:16](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/primitive/Null.ts#L16)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/primitive/Null.ts:25](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/primitive/Null.ts#L25)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Defined in [packages/types/src/primitive/Null.ts:32](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/primitive/Null.ts#L32)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/primitive/Null.ts:39](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/primitive/Null.ts#L39)*

**`description`** Checks if the value is an empty value (always true)

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/primitive/Null.ts:46](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/primitive/Null.ts#L46)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [packages/types/src/primitive/Null.ts:53](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/primitive/Null.ts#L53)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(): *null*

*Defined in [packages/types/src/primitive/Null.ts:60](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/primitive/Null.ts#L60)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Returns:** *null*

___

###  toJSON

▸ **toJSON**(): *null*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/primitive/Null.ts:67](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/primitive/Null.ts#L67)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *null*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/primitive/Null.ts:74](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/primitive/Null.ts#L74)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/primitive/Null.ts:81](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/primitive/Null.ts#L81)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/primitive/Null.ts:90](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/primitive/Null.ts#L90)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*
