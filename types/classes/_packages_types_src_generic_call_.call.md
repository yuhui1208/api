[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/generic/Call"](../modules/_packages_types_src_generic_call_.md) › [Call](_packages_types_src_generic_call_.call.md)

# Class: Call

**`name`** Call

**`description`** 
Extrinsic function descriptor, as defined in
[https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node](https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node).

## Hierarchy

  ↳ [Struct](_packages_types_src_codec_struct_.struct.md)

  ↳ **Call**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)
* [IMethod](../interfaces/_packages_types_src_types_interfaces_.imethod.md)

## Index

### Constructors

* [constructor](_packages_types_src_generic_call_.call.md#constructor)

### Properties

* [registry](_packages_types_src_generic_call_.call.md#readonly-registry)

### Accessors

* [Type](_packages_types_src_generic_call_.call.md#type)
* [args](_packages_types_src_generic_call_.call.md#args)
* [argsDef](_packages_types_src_generic_call_.call.md#argsdef)
* [callIndex](_packages_types_src_generic_call_.call.md#callindex)
* [data](_packages_types_src_generic_call_.call.md#data)
* [defKeys](_packages_types_src_generic_call_.call.md#defkeys)
* [encodedLength](_packages_types_src_generic_call_.call.md#encodedlength)
* [hasOrigin](_packages_types_src_generic_call_.call.md#hasorigin)
* [hash](_packages_types_src_generic_call_.call.md#hash)
* [isEmpty](_packages_types_src_generic_call_.call.md#isempty)
* [meta](_packages_types_src_generic_call_.call.md#meta)
* [method](_packages_types_src_generic_call_.call.md#method)
* [methodName](_packages_types_src_generic_call_.call.md#methodname)
* [section](_packages_types_src_generic_call_.call.md#section)
* [sectionName](_packages_types_src_generic_call_.call.md#sectionname)

### Methods

* [eq](_packages_types_src_generic_call_.call.md#eq)
* [get](_packages_types_src_generic_call_.call.md#get)
* [getAtIndex](_packages_types_src_generic_call_.call.md#getatindex)
* [toArray](_packages_types_src_generic_call_.call.md#toarray)
* [toHex](_packages_types_src_generic_call_.call.md#tohex)
* [toHuman](_packages_types_src_generic_call_.call.md#tohuman)
* [toJSON](_packages_types_src_generic_call_.call.md#tojson)
* [toRawType](_packages_types_src_generic_call_.call.md#torawtype)
* [toString](_packages_types_src_generic_call_.call.md#tostring)
* [toU8a](_packages_types_src_generic_call_.call.md#tou8a)
* [filterOrigin](_packages_types_src_generic_call_.call.md#static-filterorigin)
* [typesToMap](_packages_types_src_generic_call_.call.md#static-typestomap)
* [with](_packages_types_src_generic_call_.call.md#static-with)

## Constructors

###  constructor

\+ **new Call**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `value`: unknown, `meta?`: [FunctionMetadataLatest](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#functionmetadatalatest)): *[Call](_packages_types_src_generic_call_.call.md)*

*Overrides [Struct](_packages_types_src_codec_struct_.struct.md).[constructor](_packages_types_src_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/generic/Call.ts:122](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/generic/Call.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`value` | unknown |
`meta?` | [FunctionMetadataLatest](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#functionmetadatalatest) |

**Returns:** *[Call](_packages_types_src_generic_call_.call.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Implementation of [IMethod](../interfaces/_packages_types_src_types_interfaces_.imethod.md).[registry](../interfaces/_packages_types_src_types_interfaces_.imethod.md#readonly-registry)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[registry](_packages_types_src_codec_struct_.struct.md#readonly-registry)*

*Defined in [packages/types/src/codec/Struct.ts:109](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/codec/Struct.ts#L109)*

## Accessors

###  Type

• **get Type**(): *object*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[Type](_packages_types_src_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:172](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/codec/Struct.ts#L172)*

**`description`** Returns the Type description to sthe structure

**Returns:** *object*

___

###  args

• **get args**(): *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]*

*Defined in [packages/types/src/generic/Call.ts:149](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/generic/Call.ts#L149)*

**`description`** The arguments for the function call

**Returns:** *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]*

___

###  argsDef

• **get argsDef**(): *[ArgsDef](../modules/_packages_types_src_types_codec_.md#argsdef)*

*Defined in [packages/types/src/generic/Call.ts:157](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/generic/Call.ts#L157)*

**`description`** The argument definitions

**Returns:** *[ArgsDef](../modules/_packages_types_src_types_codec_.md#argsdef)*

___

###  callIndex

• **get callIndex**(): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/generic/Call.ts:164](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/generic/Call.ts#L164)*

**`description`** The encoded `[sectionIndex, methodIndex]` identifier

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

___

###  data

• **get data**(): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/generic/Call.ts:171](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/generic/Call.ts#L171)*

**`description`** The encoded data

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[defKeys](_packages_types_src_codec_struct_.struct.md#defkeys)*

*Defined in [packages/types/src/codec/Struct.ts:150](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/codec/Struct.ts#L150)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[encodedLength](_packages_types_src_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:186](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/codec/Struct.ts#L186)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hasOrigin

• **get hasOrigin**(): *boolean*

*Defined in [packages/types/src/generic/Call.ts:178](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/generic/Call.ts#L178)*

**`description`** `true` if the `Origin` type is on the method (extrinsic method)

**Returns:** *boolean*

___

###  hash

• **get hash**(): *H256*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[hash](_packages_types_src_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/codec/Struct.ts#L197)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[isEmpty](_packages_types_src_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:157](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/codec/Struct.ts#L157)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  meta

• **get meta**(): *FunctionMetadataLatest*

*Defined in [packages/types/src/generic/Call.ts:187](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/generic/Call.ts#L187)*

**`description`** The [[FunctionMetadata]]

**Returns:** *FunctionMetadataLatest*

___

###  method

• **get method**(): *string*

*Defined in [packages/types/src/generic/Call.ts:201](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/generic/Call.ts#L201)*

**`description`** Returns the name of the method

**Returns:** *string*

___

###  methodName

• **get methodName**(): *string*

*Defined in [packages/types/src/generic/Call.ts:194](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/generic/Call.ts#L194)*

**`description`** Returns the name of the method

**Returns:** *string*

___

###  section

• **get section**(): *string*

*Defined in [packages/types/src/generic/Call.ts:215](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/generic/Call.ts#L215)*

**`description`** Returns the module containing the method

**Returns:** *string*

___

###  sectionName

• **get sectionName**(): *string*

*Defined in [packages/types/src/generic/Call.ts:208](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/generic/Call.ts#L208)*

**`description`** Returns the module containing the method

**Returns:** *string*

## Methods

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [IMethod](../interfaces/_packages_types_src_types_interfaces_.imethod.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[eq](_packages_types_src_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/codec/Struct.ts#L204)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof TypesDef): *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md) | undefined*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[get](_packages_types_src_codec_struct_.struct.md#get)*

*Overrides [CodecMap](_packages_types_src_codec_map_.codecmap.md).[get](_packages_types_src_codec_map_.codecmap.md#get)*

*Defined in [packages/types/src/codec/Struct.ts:212](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/codec/Struct.ts#L212)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof TypesDef | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[getAtIndex](_packages_types_src_codec_struct_.struct.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:219](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/codec/Struct.ts#L219)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toArray](_packages_types_src_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:226](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/codec/Struct.ts#L226)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toHex](_packages_types_src_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:233](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/codec/Struct.ts#L233)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExpanded?`: undefined | false | true): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Implementation of [IMethod](../interfaces/_packages_types_src_types_interfaces_.imethod.md)*

*Overrides [Struct](_packages_types_src_codec_struct_.struct.md).[toHuman](_packages_types_src_codec_struct_.struct.md#tohuman)*

*Defined in [packages/types/src/generic/Call.ts:222](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/generic/Call.ts#L222)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExpanded?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Implementation of [IMethod](../interfaces/_packages_types_src_types_interfaces_.imethod.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toJSON](_packages_types_src_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:253](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/codec/Struct.ts#L253)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IMethod](../interfaces/_packages_types_src_types_interfaces_.imethod.md)*

*Overrides [Struct](_packages_types_src_codec_struct_.struct.md).[toRawType](_packages_types_src_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/generic/Call.ts:250](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/generic/Call.ts#L250)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IMethod](../interfaces/_packages_types_src_types_interfaces_.imethod.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toString](_packages_types_src_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:286](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/codec/Struct.ts#L286)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts)): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Implementation of [IMethod](../interfaces/_packages_types_src_types_interfaces_.imethod.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toU8a](_packages_types_src_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:294](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/codec/Struct.ts#L294)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

___

### `Static` filterOrigin

▸ **filterOrigin**(`meta?`: [FunctionMetadataLatest](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#functionmetadatalatest)): *FunctionArgumentMetadataLatest[]*

*Defined in [packages/types/src/generic/Call.ts:137](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/generic/Call.ts#L137)*

**Parameters:**

Name | Type |
------ | ------ |
`meta?` | [FunctionMetadataLatest](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#functionmetadatalatest) |

**Returns:** *FunctionArgumentMetadataLatest[]*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `Types`: Record‹string, [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[typesToMap](_packages_types_src_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:266](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/codec/Struct.ts#L266)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`Types` | Record‹string, [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**‹**S**›(`Types`: S, `jsonMap?`: [Map](_packages_types_src_codec_struct_.struct.md#static-map)‹keyof S, string›): *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹[Struct](_packages_types_src_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[with](_packages_types_src_codec_struct_.struct.md#static-with)*

*Defined in [packages/types/src/codec/Struct.ts:126](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/codec/Struct.ts#L126)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |
`jsonMap?` | [Map](_packages_types_src_codec_struct_.struct.md#static-map)‹keyof S, string› |

**Returns:** *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹[Struct](_packages_types_src_codec_struct_.struct.md)‹S››*
