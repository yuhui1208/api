[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/generic/LookupSource"](../modules/_packages_types_src_generic_lookupsource_.md) › [LookupSource](_packages_types_src_generic_lookupsource_.lookupsource.md)

# Class: LookupSource

**`name`** LookupSource

**`description`** 
A wrapper around an AccountId and/or AccountIndex that is encoded with a prefix.
Since we are dealing with underlying publicKeys (or shorter encoded addresses),
we extend from Base with an AccountId/AccountIndex wrapper. Basically the Address
is encoded as `[ <prefix-byte>, ...publicKey/...bytes ]` as per spec

## Hierarchy

* [Base](_packages_types_src_codec_base_.base.md)‹[AccountId](_packages_types_src_generic_accountid_.accountid.md) | [AccountIndex](_packages_types_src_generic_accountindex_.accountindex.md)›

  ↳ **LookupSource**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_packages_types_src_generic_lookupsource_.lookupsource.md#constructor)

### Properties

* [registry](_packages_types_src_generic_lookupsource_.lookupsource.md#readonly-registry)

### Accessors

* [encodedLength](_packages_types_src_generic_lookupsource_.lookupsource.md#encodedlength)
* [hash](_packages_types_src_generic_lookupsource_.lookupsource.md#hash)
* [isEmpty](_packages_types_src_generic_lookupsource_.lookupsource.md#isempty)

### Methods

* [eq](_packages_types_src_generic_lookupsource_.lookupsource.md#eq)
* [toHex](_packages_types_src_generic_lookupsource_.lookupsource.md#tohex)
* [toHuman](_packages_types_src_generic_lookupsource_.lookupsource.md#tohuman)
* [toJSON](_packages_types_src_generic_lookupsource_.lookupsource.md#tojson)
* [toRawType](_packages_types_src_generic_lookupsource_.lookupsource.md#torawtype)
* [toString](_packages_types_src_generic_lookupsource_.lookupsource.md#tostring)
* [toU8a](_packages_types_src_generic_lookupsource_.lookupsource.md#tou8a)

## Constructors

###  constructor

\+ **new LookupSource**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `value`: AnyAddress): *[LookupSource](_packages_types_src_generic_lookupsource_.lookupsource.md)*

*Overrides void*

*Defined in [packages/types/src/generic/LookupSource.ts:52](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/generic/LookupSource.ts#L52)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) | - |
`value` | AnyAddress | new Uint8Array() |

**Returns:** *[LookupSource](_packages_types_src_generic_lookupsource_.lookupsource.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md).[registry](../interfaces/_packages_types_src_types_codec_.codec.md#readonly-registry)*

*Inherited from [Base](_packages_types_src_codec_base_.base.md).[registry](_packages_types_src_codec_base_.base.md#readonly-registry)*

*Defined in [packages/types/src/codec/Base.ts:15](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/codec/Base.ts#L15)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Base](_packages_types_src_codec_base_.base.md).[encodedLength](_packages_types_src_codec_base_.base.md#encodedlength)*

*Defined in [packages/types/src/generic/LookupSource.ts:75](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/generic/LookupSource.ts#L75)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [Base](_packages_types_src_codec_base_.base.md).[hash](_packages_types_src_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:34](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/codec/Base.ts#L34)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_packages_types_src_codec_base_.base.md).[isEmpty](_packages_types_src_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Base.ts:41](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/codec/Base.ts#L41)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Base](_packages_types_src_codec_base_.base.md).[eq](_packages_types_src_codec_base_.base.md#eq)*

*Defined in [packages/types/src/codec/Base.ts:48](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/codec/Base.ts#L48)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Overrides [Base](_packages_types_src_codec_base_.base.md).[toHex](_packages_types_src_codec_base_.base.md#tohex)*

*Defined in [packages/types/src/generic/LookupSource.ts:98](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/generic/LookupSource.ts#L98)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Base](_packages_types_src_codec_base_.base.md).[toHuman](_packages_types_src_codec_base_.base.md#tohuman)*

*Defined in [packages/types/src/codec/Base.ts:62](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/codec/Base.ts#L62)*

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

*Inherited from [Base](_packages_types_src_codec_base_.base.md).[toJSON](_packages_types_src_codec_base_.base.md#tojson)*

*Defined in [packages/types/src/codec/Base.ts:69](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/codec/Base.ts#L69)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Overrides [Base](_packages_types_src_codec_base_.base.md).[toRawType](_packages_types_src_codec_base_.base.md#torawtype)*

*Defined in [packages/types/src/generic/LookupSource.ts:105](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/generic/LookupSource.ts#L105)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Base](_packages_types_src_codec_base_.base.md).[toString](_packages_types_src_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/codec/Base.ts:76](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/codec/Base.ts#L76)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Overrides [Base](_packages_types_src_codec_base_.base.md).[toU8a](_packages_types_src_codec_base_.base.md#tou8a)*

*Defined in [packages/types/src/generic/LookupSource.ts:113](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/generic/LookupSource.ts#L113)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*
