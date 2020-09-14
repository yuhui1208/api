[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/metadata/src/Metadata/MagicNumber"](../modules/_packages_metadata_src_metadata_magicnumber_.md) › [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md)

# Class: MagicNumber

## Hierarchy

* U32

  ↳ **MagicNumber**

## Implements

* Codec

## Index

### Interfaces

* [MPrime](../interfaces/_packages_metadata_src_metadata_magicnumber_.magicnumber.mprime.md)
* [ReductionContext](../interfaces/_packages_metadata_src_metadata_magicnumber_.magicnumber.reductioncontext.md)

### Type aliases

* [Endianness](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#static-endianness)
* [IPrimeName](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#static-iprimename)

### Constructors

* [constructor](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#constructor)

### Properties

* [registry](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#readonly-registry)

### Accessors

* [encodedLength](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#encodedlength)
* [hash](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#hash)
* [isEmpty](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#isempty)
* [isUnsigned](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#isunsigned)

### Methods

* [bitLength](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#bitlength)
* [eq](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#eq)
* [isMax](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#ismax)
* [toBigInt](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tobigint)
* [toBn](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tobn)
* [toHex](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tohex)
* [toHuman](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tohuman)
* [toJSON](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tojson)
* [toRawType](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#torawtype)
* [toString](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tostring)
* [toU8a](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tou8a)
* [with](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#static-with)

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

\+ **new MagicNumber**(`registry`: Registry, `value?`: AnyNumber): *[MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md)*

*Overrides void*

*Defined in [packages/metadata/src/Metadata/MagicNumber.ts:13](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/metadata/src/Metadata/MagicNumber.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`value?` | AnyNumber |

**Returns:** *[MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md)*

## Properties

### `Readonly` registry

• **registry**: *Registry*

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[registry](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#readonly-registry)*

*Defined in [packages/types/src/codec/AbstractInt.ts:63](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/AbstractInt.ts#L63)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[encodedLength](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#encodedlength)*

*Defined in [packages/types/src/codec/AbstractInt.ts:86](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/AbstractInt.ts#L86)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[hash](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#hash)*

*Defined in [packages/types/src/codec/AbstractInt.ts:93](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/AbstractInt.ts#L93)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[isEmpty](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#isempty)*

*Defined in [packages/types/src/codec/AbstractInt.ts:100](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/AbstractInt.ts#L100)*

**`description`** Checks if the value is a zero value (align elsewhere)

**Returns:** *boolean*

___

###  isUnsigned

• **get isUnsigned**(): *boolean*

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[isUnsigned](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#isunsigned)*

*Defined in [packages/types/src/codec/AbstractInt.ts:107](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/AbstractInt.ts#L107)*

**`description`** Checks if the value is an unsigned type

**Returns:** *boolean*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[bitLength](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#bitlength)*

*Defined in [packages/types/src/codec/AbstractInt.ts:114](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/AbstractInt.ts#L114)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[eq](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#eq)*

*Defined in [packages/types/src/codec/AbstractInt.ts:122](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/AbstractInt.ts#L122)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  isMax

▸ **isMax**(): *boolean*

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[isMax](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#ismax)*

*Defined in [packages/types/src/codec/AbstractInt.ts:135](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/AbstractInt.ts#L135)*

**`description`** True if this value is the max of the type

**Returns:** *boolean*

___

###  toBigInt

▸ **toBigInt**(): *BigInt*

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[toBigInt](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tobigint)*

*Defined in [packages/types/src/codec/AbstractInt.ts:144](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/AbstractInt.ts#L144)*

**`description`** Returns a BigInt representation of the number

**Returns:** *BigInt*

___

###  toBn

▸ **toBn**(): *BN*

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[toBn](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tobn)*

*Defined in [packages/types/src/codec/AbstractInt.ts:151](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/AbstractInt.ts#L151)*

**`description`** Returns the BN representation of the number. (Compatibility)

**Returns:** *BN*

___

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[toHex](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tohex)*

*Defined in [packages/types/src/codec/AbstractInt.ts:158](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/AbstractInt.ts#L158)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExpanded?`: undefined | false | true): *string*

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[toHuman](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tohuman)*

*Defined in [packages/types/src/codec/AbstractInt.ts:171](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/AbstractInt.ts#L171)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExpanded?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *any*

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[toJSON](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tojson)*

*Defined in [packages/types/src/codec/AbstractInt.ts:187](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/AbstractInt.ts#L187)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *any*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[toRawType](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#torawtype)*

*Defined in [packages/types/src/codec/AbstractInt.ts:199](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/AbstractInt.ts#L199)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(`base?`: undefined | number): *string*

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[toString](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tostring)*

*Defined in [packages/types/src/codec/AbstractInt.ts:212](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/AbstractInt.ts#L212)*

**`description`** Returns the string representation of the value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`base?` | undefined &#124; number | The base to use for the conversion  |

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[toU8a](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#tou8a)*

*Defined in [packages/types/src/codec/AbstractInt.ts:222](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/AbstractInt.ts#L222)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` with

▸ **with**(`bitLength`: UIntBitLength, `typeName?`: undefined | string): *Constructor‹UInt›*

*Inherited from [MagicNumber](_packages_metadata_src_metadata_magicnumber_.magicnumber.md).[with](_packages_metadata_src_metadata_magicnumber_.magicnumber.md#static-with)*

*Defined in [packages/types/src/codec/UInt.ts:24](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/codec/UInt.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength` | UIntBitLength |
`typeName?` | undefined &#124; string |

**Returns:** *Constructor‹UInt›*
