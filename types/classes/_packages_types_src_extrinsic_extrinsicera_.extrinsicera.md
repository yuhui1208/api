[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/extrinsic/ExtrinsicEra"](../modules/_packages_types_src_extrinsic_extrinsicera_.md) › [ExtrinsicEra](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md)

# Class: ExtrinsicEra

**`name`** GenericExtrinsicEra

**`description`** 
The era for an extrinsic, indicating either a mortal or immortal extrinsic

## Hierarchy

* [Enum](_packages_types_src_codec_enum_.enum.md)

  ↳ **ExtrinsicEra**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)
* [IExtrinsicEra](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicera.md)

## Index

### Constructors

* [constructor](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md#constructor)

### Properties

* [registry](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md#readonly-registry)

### Accessors

* [asImmortalEra](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md#asimmortalera)
* [asMortalEra](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md#asmortalera)
* [defEntries](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md#defentries)
* [defKeys](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md#defkeys)
* [encodedLength](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md#encodedlength)
* [hash](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md#hash)
* [index](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md#index)
* [isBasic](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md#isbasic)
* [isEmpty](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md#isempty)
* [isImmortalEra](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md#isimmortalera)
* [isMortalEra](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md#ismortalera)
* [isNone](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md#isnone)
* [isNull](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md#isnull)
* [type](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md#type)
* [value](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md#value)

### Methods

* [eq](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md#eq)
* [toHex](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md#tohex)
* [toHuman](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md#tohuman)
* [toJSON](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md#tojson)
* [toNumber](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md#tonumber)
* [toRawType](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md#torawtype)
* [toString](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md#tostring)
* [toU8a](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md#tou8a)
* [with](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicEra**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `value?`: unknown): *[ExtrinsicEra](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md)*

*Overrides [Enum](_packages_types_src_codec_enum_.enum.md).[constructor](_packages_types_src_codec_enum_.enum.md#constructor)*

*Defined in [packages/types/src/extrinsic/ExtrinsicEra.ts:205](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/extrinsic/ExtrinsicEra.ts#L205)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`value?` | unknown |

**Returns:** *[ExtrinsicEra](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Implementation of [IExtrinsicEra](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicera.md).[registry](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicera.md#readonly-registry)*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[registry](_packages_types_src_codec_enum_.enum.md#readonly-registry)*

*Defined in [packages/types/src/codec/Enum.ts:119](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/codec/Enum.ts#L119)*

## Accessors

###  asImmortalEra

• **get asImmortalEra**(): *[ImmortalEra](_packages_types_src_extrinsic_extrinsicera_.immortalera.md)*

*Defined in [packages/types/src/extrinsic/ExtrinsicEra.ts:248](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/extrinsic/ExtrinsicEra.ts#L248)*

**`description`** Returns the item as a [ImmortalEra](_packages_types_src_extrinsic_extrinsicera_.immortalera.md)

**Returns:** *[ImmortalEra](_packages_types_src_extrinsic_extrinsicera_.immortalera.md)*

___

###  asMortalEra

• **get asMortalEra**(): *[MortalEra](_packages_types_src_extrinsic_extrinsicera_.mortalera.md)*

*Defined in [packages/types/src/extrinsic/ExtrinsicEra.ts:257](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/extrinsic/ExtrinsicEra.ts#L257)*

**`description`** Returns the item as a [MortalEra](_packages_types_src_extrinsic_extrinsicera_.mortalera.md)

**Returns:** *[MortalEra](_packages_types_src_extrinsic_extrinsicera_.mortalera.md)*

___

###  defEntries

• **get defEntries**(): *string[]*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[defEntries](_packages_types_src_codec_enum_.enum.md#defentries)*

*Defined in [packages/types/src/codec/Enum.ts:231](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/codec/Enum.ts#L231)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[defKeys](_packages_types_src_codec_enum_.enum.md#defkeys)*

*Defined in [packages/types/src/codec/Enum.ts:238](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/codec/Enum.ts#L238)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Enum](_packages_types_src_codec_enum_.enum.md).[encodedLength](_packages_types_src_codec_enum_.enum.md#encodedlength)*

*Defined in [packages/types/src/extrinsic/ExtrinsicEra.ts:239](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/extrinsic/ExtrinsicEra.ts#L239)*

**`description`** Override the encoded length method

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[hash](_packages_types_src_codec_enum_.enum.md#hash)*

*Defined in [packages/types/src/codec/Enum.ts:189](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/codec/Enum.ts#L189)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[index](_packages_types_src_codec_enum_.enum.md#index)*

*Defined in [packages/types/src/codec/Enum.ts:196](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/codec/Enum.ts#L196)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isBasic

• **get isBasic**(): *boolean*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[isBasic](_packages_types_src_codec_enum_.enum.md#isbasic)*

*Defined in [packages/types/src/codec/Enum.ts:203](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/codec/Enum.ts#L203)*

**`description`** true if this is a basic enum (no values)

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[isEmpty](_packages_types_src_codec_enum_.enum.md#isempty)*

*Defined in [packages/types/src/codec/Enum.ts:210](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/codec/Enum.ts#L210)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isImmortalEra

• **get isImmortalEra**(): *boolean*

*Defined in [packages/types/src/extrinsic/ExtrinsicEra.ts:266](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/extrinsic/ExtrinsicEra.ts#L266)*

**`description`** `true` if Immortal

**Returns:** *boolean*

___

###  isMortalEra

• **get isMortalEra**(): *boolean*

*Defined in [packages/types/src/extrinsic/ExtrinsicEra.ts:273](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/extrinsic/ExtrinsicEra.ts#L273)*

**`description`** `true` if Mortal

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[isNone](_packages_types_src_codec_enum_.enum.md#isnone)*

*Defined in [packages/types/src/codec/Enum.ts:217](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/codec/Enum.ts#L217)*

**`description`** Checks if the Enum points to a [Null](_packages_types_src_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[isNull](_packages_types_src_codec_enum_.enum.md#isnull)*

*Defined in [packages/types/src/codec/Enum.ts:224](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/codec/Enum.ts#L224)*

**`description`** Checks if the Enum points to a [Null](_packages_types_src_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[type](_packages_types_src_codec_enum_.enum.md#type)*

*Defined in [packages/types/src/codec/Enum.ts:245](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/codec/Enum.ts#L245)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[value](_packages_types_src_codec_enum_.enum.md#value)*

*Defined in [packages/types/src/codec/Enum.ts:252](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/codec/Enum.ts#L252)*

**`description`** The value of the enum

**Returns:** *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [IExtrinsicEra](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicera.md)*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[eq](_packages_types_src_codec_enum_.enum.md#eq)*

*Defined in [packages/types/src/codec/Enum.ts:259](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/codec/Enum.ts#L259)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[toHex](_packages_types_src_codec_enum_.enum.md#tohex)*

*Defined in [packages/types/src/codec/Enum.ts:282](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/codec/Enum.ts#L282)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Implementation of [IExtrinsicEra](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicera.md)*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[toHuman](_packages_types_src_codec_enum_.enum.md#tohuman)*

*Defined in [packages/types/src/codec/Enum.ts:289](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/codec/Enum.ts#L289)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Implementation of [IExtrinsicEra](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicera.md)*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[toJSON](_packages_types_src_codec_enum_.enum.md#tojson)*

*Defined in [packages/types/src/codec/Enum.ts:298](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/codec/Enum.ts#L298)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[toNumber](_packages_types_src_codec_enum_.enum.md#tonumber)*

*Defined in [packages/types/src/codec/Enum.ts:307](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/codec/Enum.ts#L307)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IExtrinsicEra](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicera.md)*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[toRawType](_packages_types_src_codec_enum_.enum.md#torawtype)*

*Defined in [packages/types/src/codec/Enum.ts:323](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/codec/Enum.ts#L323)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IExtrinsicEra](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicera.md)*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[toString](_packages_types_src_codec_enum_.enum.md#tostring)*

*Defined in [packages/types/src/codec/Enum.ts:330](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/codec/Enum.ts#L330)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Overrides [Enum](_packages_types_src_codec_enum_.enum.md).[toU8a](_packages_types_src_codec_enum_.enum.md#tou8a)*

*Defined in [packages/types/src/extrinsic/ExtrinsicEra.ts:281](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/extrinsic/ExtrinsicEra.ts#L281)*

**`description`** Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**(`Types`: Record‹string, keyof InterfaceTypes | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)› | string[]): *[EnumConstructor](../interfaces/_packages_types_src_codec_enum_.enumconstructor.md)‹[Enum](_packages_types_src_codec_enum_.enum.md)›*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[with](_packages_types_src_codec_enum_.enum.md#static-with)*

*Defined in [packages/types/src/codec/Enum.ts:143](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/codec/Enum.ts#L143)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, keyof InterfaceTypes &#124; [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)› &#124; string[] |

**Returns:** *[EnumConstructor](../interfaces/_packages_types_src_codec_enum_.enumconstructor.md)‹[Enum](_packages_types_src_codec_enum_.enum.md)›*
