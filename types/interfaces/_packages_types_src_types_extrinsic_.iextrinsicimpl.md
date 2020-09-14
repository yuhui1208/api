[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/types/extrinsic"](../modules/_packages_types_src_types_extrinsic_.md) › [IExtrinsicImpl](_packages_types_src_types_extrinsic_.iextrinsicimpl.md)

# Interface: IExtrinsicImpl

## Hierarchy

* IExtrinsicSignable‹[IExtrinsicImpl](_packages_types_src_types_extrinsic_.iextrinsicimpl.md)›

* [Codec](_packages_types_src_types_codec_.codec.md)

  ↳ **IExtrinsicImpl**

## Implemented by

* [ExtrinsicV1](../classes/_packages_types_src_extrinsic_v1_extrinsic_.extrinsicv1.md)
* [ExtrinsicV2](../classes/_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md)
* [ExtrinsicV3](../classes/_packages_types_src_extrinsic_v3_extrinsic_.extrinsicv3.md)
* [ExtrinsicV4](../classes/_packages_types_src_extrinsic_v4_extrinsic_.extrinsicv4.md)

## Index

### Properties

* [encodedLength](_packages_types_src_types_extrinsic_.iextrinsicimpl.md#readonly-encodedlength)
* [hash](_packages_types_src_types_extrinsic_.iextrinsicimpl.md#readonly-hash)
* [isEmpty](_packages_types_src_types_extrinsic_.iextrinsicimpl.md#readonly-isempty)
* [method](_packages_types_src_types_extrinsic_.iextrinsicimpl.md#readonly-method)
* [registry](_packages_types_src_types_extrinsic_.iextrinsicimpl.md#readonly-registry)
* [signature](_packages_types_src_types_extrinsic_.iextrinsicimpl.md#readonly-signature)
* [version](_packages_types_src_types_extrinsic_.iextrinsicimpl.md#readonly-version)

### Methods

* [addSignature](_packages_types_src_types_extrinsic_.iextrinsicimpl.md#addsignature)
* [eq](_packages_types_src_types_extrinsic_.iextrinsicimpl.md#eq)
* [sign](_packages_types_src_types_extrinsic_.iextrinsicimpl.md#sign)
* [signFake](_packages_types_src_types_extrinsic_.iextrinsicimpl.md#signfake)
* [toHex](_packages_types_src_types_extrinsic_.iextrinsicimpl.md#tohex)
* [toHuman](_packages_types_src_types_extrinsic_.iextrinsicimpl.md#tohuman)
* [toJSON](_packages_types_src_types_extrinsic_.iextrinsicimpl.md#tojson)
* [toRawType](_packages_types_src_types_extrinsic_.iextrinsicimpl.md#torawtype)
* [toString](_packages_types_src_types_extrinsic_.iextrinsicimpl.md#tostring)
* [toU8a](_packages_types_src_types_extrinsic_.iextrinsicimpl.md#tou8a)

## Properties

### `Readonly` encodedLength

• **encodedLength**: *number*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[encodedLength](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#readonly-encodedlength)*

*Defined in [packages/types/src/types/codec.ts:24](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/types/codec.ts#L24)*

**`description`** The length of the value when encoded as a Uint8Array

___

### `Readonly` hash

• **hash**: *H256*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[hash](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#readonly-hash)*

*Defined in [packages/types/src/types/codec.ts:29](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/types/codec.ts#L29)*

**`description`** Returns a hash of the value

___

### `Readonly` isEmpty

• **isEmpty**: *boolean*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[isEmpty](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#readonly-isempty)*

*Defined in [packages/types/src/types/codec.ts:34](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/types/codec.ts#L34)*

**`description`** Checks if the value is an empty value

___

### `Readonly` method

• **method**: *Call*

*Defined in [packages/types/src/types/extrinsic.ts:196](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/types/extrinsic.ts#L196)*

___

### `Readonly` registry

• **registry**: *[Registry](_packages_types_src_types_registry_.registry.md)*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[registry](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#readonly-registry)*

*Defined in [packages/types/src/types/codec.ts:39](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/types/codec.ts#L39)*

**`description`** The registry associated with this object

___

### `Readonly` signature

• **signature**: *[IExtrinsicSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md)*

*Defined in [packages/types/src/types/extrinsic.ts:197](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/types/extrinsic.ts#L197)*

___

### `Readonly` version

• **version**: *number*

*Defined in [packages/types/src/types/extrinsic.ts:198](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/types/extrinsic.ts#L198)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: Address | [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array) | string, `signature`: [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array) | string, `payload`: [ExtrinsicPayloadValue](_packages_types_src_types_extrinsic_.extrinsicpayloadvalue.md) | [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array) | string): *[IExtrinsicImpl](_packages_types_src_types_extrinsic_.iextrinsicimpl.md)*

*Inherited from [IExtrinsicImpl](_packages_types_src_types_extrinsic_.iextrinsicimpl.md).[addSignature](_packages_types_src_types_extrinsic_.iextrinsicimpl.md#addsignature)*

*Defined in [packages/types/src/types/extrinsic.ts:190](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/types/extrinsic.ts#L190)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address &#124; [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array) &#124; string |
`signature` | [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array) &#124; string |
`payload` | [ExtrinsicPayloadValue](_packages_types_src_types_extrinsic_.extrinsicpayloadvalue.md) &#124; [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array) &#124; string |

**Returns:** *[IExtrinsicImpl](_packages_types_src_types_extrinsic_.iextrinsicimpl.md)*

___

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[eq](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#eq)*

*Defined in [packages/types/src/types/codec.ts:44](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/types/codec.ts#L44)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](_packages_types_src_types_interfaces_.ikeyringpair.md), `options`: [SignatureOptions](_packages_types_src_types_extrinsic_.signatureoptions.md)): *[IExtrinsicImpl](_packages_types_src_types_extrinsic_.iextrinsicimpl.md)*

*Inherited from [IExtrinsicImpl](_packages_types_src_types_extrinsic_.iextrinsicimpl.md).[sign](_packages_types_src_types_extrinsic_.iextrinsicimpl.md#sign)*

*Defined in [packages/types/src/types/extrinsic.ts:191](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/types/extrinsic.ts#L191)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](_packages_types_src_types_interfaces_.ikeyringpair.md) |
`options` | [SignatureOptions](_packages_types_src_types_extrinsic_.signatureoptions.md) |

**Returns:** *[IExtrinsicImpl](_packages_types_src_types_extrinsic_.iextrinsicimpl.md)*

___

###  signFake

▸ **signFake**(`address`: Address | [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array) | string, `options`: [SignatureOptions](_packages_types_src_types_extrinsic_.signatureoptions.md)): *[IExtrinsicImpl](_packages_types_src_types_extrinsic_.iextrinsicimpl.md)*

*Inherited from [IExtrinsicImpl](_packages_types_src_types_extrinsic_.iextrinsicimpl.md).[signFake](_packages_types_src_types_extrinsic_.iextrinsicimpl.md#signfake)*

*Defined in [packages/types/src/types/extrinsic.ts:192](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/types/extrinsic.ts#L192)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | Address &#124; [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array) &#124; string |
`options` | [SignatureOptions](_packages_types_src_types_extrinsic_.signatureoptions.md) |

**Returns:** *[IExtrinsicImpl](_packages_types_src_types_extrinsic_.iextrinsicimpl.md)*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toHex](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tohex)*

*Defined in [packages/types/src/types/codec.ts:49](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/types/codec.ts#L49)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toHuman](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tohuman)*

*Defined in [packages/types/src/types/codec.ts:54](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/types/codec.ts#L54)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toJSON](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tojson)*

*Defined in [packages/types/src/types/codec.ts:59](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/types/codec.ts#L59)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toRawType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:64](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/types/codec.ts#L64)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toString](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tostring)*

*Defined in [packages/types/src/types/codec.ts:69](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/types/codec.ts#L69)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts)): *[Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toU8a](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:75](https://github.com/polkadot-js/api/blob/e7be062522/packages/types/src/types/codec.ts#L75)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array)*
