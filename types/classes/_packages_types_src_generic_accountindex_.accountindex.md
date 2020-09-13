[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/generic/AccountIndex"](../modules/_packages_types_src_generic_accountindex_.md) › [AccountIndex](_packages_types_src_generic_accountindex_.accountindex.md)

# Class: AccountIndex

**`name`** AccountIndex

**`description`** 
A wrapper around an AccountIndex, which is a shortened, variable-length encoding
for an Account. We extends from [U32](_packages_types_src_primitive_u32_.u32.md) to provide the number-like properties.

## Hierarchy

  ↳ [U32](_packages_types_src_primitive_u32_.u32.md)

  ↳ **AccountIndex**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Index

### Interfaces

* [MPrime](../interfaces/_packages_types_src_generic_accountindex_.accountindex.mprime.md)
* [ReductionContext](../interfaces/_packages_types_src_generic_accountindex_.accountindex.reductioncontext.md)

### Type aliases

* [Endianness](_packages_types_src_generic_accountindex_.accountindex.md#static-endianness)
* [IPrimeName](_packages_types_src_generic_accountindex_.accountindex.md#static-iprimename)

### Constructors

* [constructor](_packages_types_src_generic_accountindex_.accountindex.md#constructor)

### Methods

* [eq](_packages_types_src_generic_accountindex_.accountindex.md#eq)
* [toHuman](_packages_types_src_generic_accountindex_.accountindex.md#tohuman)
* [toJSON](_packages_types_src_generic_accountindex_.accountindex.md#tojson)
* [toRawType](_packages_types_src_generic_accountindex_.accountindex.md#torawtype)
* [toString](_packages_types_src_generic_accountindex_.accountindex.md#tostring)
* [calcLength](_packages_types_src_generic_accountindex_.accountindex.md#static-calclength)
* [readLength](_packages_types_src_generic_accountindex_.accountindex.md#static-readlength)
* [with](_packages_types_src_generic_accountindex_.accountindex.md#static-with)
* [writeLength](_packages_types_src_generic_accountindex_.accountindex.md#static-writelength)

## Type aliases

### `Static` Endianness

Ƭ **Endianness**: *"le" | "be"*

Defined in node_modules/@types/bn.js/index.d.ts:11

___

### `Static` IPrimeName

Ƭ **IPrimeName**: *"k256" | "p224" | "p192" | "p25519"*

Defined in node_modules/@types/bn.js/index.d.ts:12

## Constructors

###  constructor

\+ **new AccountIndex**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `value`: [AnyNumber](../modules/_packages_types_src_types_helpers_.md#anynumber)): *[AccountIndex](_packages_types_src_generic_accountindex_.accountindex.md)*

*Overrides [UInt](_packages_types_src_codec_uint_.uint.md).[constructor](_packages_types_src_codec_uint_.uint.md#constructor)*

*Defined in [packages/types/src/generic/AccountIndex.ts:43](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/generic/AccountIndex.ts#L43)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) | - |
`value` | [AnyNumber](../modules/_packages_types_src_types_helpers_.md#anynumber) | new BN(0) |

**Returns:** *[AccountIndex](_packages_types_src_generic_accountindex_.accountindex.md)*

## Methods

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Overrides void*

*Defined in [packages/types/src/generic/AccountIndex.ts:88](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/generic/AccountIndex.ts#L88)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  toHuman

▸ **toHuman**(): *string*

*Overrides void*

*Defined in [packages/types/src/generic/AccountIndex.ts:101](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/generic/AccountIndex.ts#L101)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Overrides void*

*Defined in [packages/types/src/generic/AccountIndex.ts:108](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/generic/AccountIndex.ts#L108)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Overrides void*

*Defined in [packages/types/src/generic/AccountIndex.ts:124](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/generic/AccountIndex.ts#L124)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Overrides void*

*Defined in [packages/types/src/generic/AccountIndex.ts:115](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/generic/AccountIndex.ts#L115)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

### `Static` calcLength

▸ **calcLength**(`_value`: BN | number): *number*

*Defined in [packages/types/src/generic/AccountIndex.ts:48](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/generic/AccountIndex.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`_value` | BN &#124; number |

**Returns:** *number*

___

### `Static` readLength

▸ **readLength**(`input`: [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)): *[number, number]*

*Defined in [packages/types/src/generic/AccountIndex.ts:62](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/generic/AccountIndex.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[number, number]*

___

### `Static` with

▸ **with**(`bitLength`: [UIntBitLength](../modules/_packages_types_src_codec_abstractint_.md#uintbitlength), `typeName?`: undefined | string): *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹[UInt](_packages_types_src_codec_uint_.uint.md)›*

*Inherited from [UInt](_packages_types_src_codec_uint_.uint.md).[with](_packages_types_src_codec_uint_.uint.md#static-with)*

*Defined in [packages/types/src/codec/UInt.ts:24](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/codec/UInt.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength` | [UIntBitLength](../modules/_packages_types_src_codec_abstractint_.md#uintbitlength) |
`typeName?` | undefined &#124; string |

**Returns:** *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹[UInt](_packages_types_src_codec_uint_.uint.md)›*

___

### `Static` writeLength

▸ **writeLength**(`input`: [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/generic/AccountIndex.ts:76](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/types/src/generic/AccountIndex.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*
