[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/create/registry"](../modules/_packages_types_src_create_registry_.md) › [TypeRegistry](_packages_types_src_create_registry_.typeregistry.md)

# Class: TypeRegistry

## Hierarchy

* **TypeRegistry**

## Implements

* [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)

## Index

### Constructors

* [constructor](_packages_types_src_create_registry_.typeregistry.md#constructor)

### Accessors

* [chainDecimals](_packages_types_src_create_registry_.typeregistry.md#chaindecimals)
* [chainSS58](_packages_types_src_create_registry_.typeregistry.md#chainss58)
* [chainToken](_packages_types_src_create_registry_.typeregistry.md#chaintoken)
* [knownTypes](_packages_types_src_create_registry_.typeregistry.md#knowntypes)
* [signedExtensions](_packages_types_src_create_registry_.typeregistry.md#signedextensions)

### Methods

* [createClass](_packages_types_src_create_registry_.typeregistry.md#createclass)
* [createType](_packages_types_src_create_registry_.typeregistry.md#createtype)
* [findMetaCall](_packages_types_src_create_registry_.typeregistry.md#findmetacall)
* [findMetaError](_packages_types_src_create_registry_.typeregistry.md#findmetaerror)
* [findMetaEvent](_packages_types_src_create_registry_.typeregistry.md#findmetaevent)
* [get](_packages_types_src_create_registry_.typeregistry.md#get)
* [getChainProperties](_packages_types_src_create_registry_.typeregistry.md#getchainproperties)
* [getClassName](_packages_types_src_create_registry_.typeregistry.md#getclassname)
* [getDefinition](_packages_types_src_create_registry_.typeregistry.md#getdefinition)
* [getOrThrow](_packages_types_src_create_registry_.typeregistry.md#getorthrow)
* [getOrUnknown](_packages_types_src_create_registry_.typeregistry.md#getorunknown)
* [getSignedExtensionExtra](_packages_types_src_create_registry_.typeregistry.md#getsignedextensionextra)
* [getSignedExtensionTypes](_packages_types_src_create_registry_.typeregistry.md#getsignedextensiontypes)
* [hasClass](_packages_types_src_create_registry_.typeregistry.md#hasclass)
* [hasDef](_packages_types_src_create_registry_.typeregistry.md#hasdef)
* [hasType](_packages_types_src_create_registry_.typeregistry.md#hastype)
* [hash](_packages_types_src_create_registry_.typeregistry.md#hash)
* [register](_packages_types_src_create_registry_.typeregistry.md#register)
* [setChainProperties](_packages_types_src_create_registry_.typeregistry.md#setchainproperties)
* [setHasher](_packages_types_src_create_registry_.typeregistry.md#sethasher)
* [setKnownTypes](_packages_types_src_create_registry_.typeregistry.md#setknowntypes)
* [setMetadata](_packages_types_src_create_registry_.typeregistry.md#setmetadata)
* [setSignedExtensions](_packages_types_src_create_registry_.typeregistry.md#setsignedextensions)

## Constructors

###  constructor

\+ **new TypeRegistry**(): *[TypeRegistry](_packages_types_src_create_registry_.typeregistry.md)*

*Defined in [packages/types/src/create/registry.ts:108](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L108)*

**Returns:** *[TypeRegistry](_packages_types_src_create_registry_.typeregistry.md)*

## Accessors

###  chainDecimals

• **get chainDecimals**(): *number*

*Defined in [packages/types/src/create/registry.ts:128](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L128)*

**Returns:** *number*

___

###  chainSS58

• **get chainSS58**(): *number | undefined*

*Defined in [packages/types/src/create/registry.ts:134](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L134)*

**Returns:** *number | undefined*

___

###  chainToken

• **get chainToken**(): *string*

*Defined in [packages/types/src/create/registry.ts:140](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L140)*

**Returns:** *string*

___

###  knownTypes

• **get knownTypes**(): *[RegisteredTypes](../interfaces/_packages_types_src_types_registry_.registeredtypes.md)*

*Defined in [packages/types/src/create/registry.ts:146](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L146)*

**Returns:** *[RegisteredTypes](../interfaces/_packages_types_src_types_registry_.registeredtypes.md)*

___

###  signedExtensions

• **get signedExtensions**(): *string[]*

*Defined in [packages/types/src/create/registry.ts:150](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L150)*

**Returns:** *string[]*

## Methods

###  createClass

▸ **createClass**‹**K**›(`type`: K): *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹InterfaceTypes[K]›*

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:157](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L157)*

**`describe`** Creates an instance of the class

**Type parameters:**

▪ **K**: *keyof InterfaceTypes*

**Parameters:**

Name | Type |
------ | ------ |
`type` | K |

**Returns:** *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹InterfaceTypes[K]›*

___

###  createType

▸ **createType**‹**K**›(`type`: K, ...`params`: unknown[]): *InterfaceTypes[K]*

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:165](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L165)*

**`description`** Creates an instance of a type as registered

**Type parameters:**

▪ **K**: *keyof InterfaceTypes*

**Parameters:**

Name | Type |
------ | ------ |
`type` | K |
`...params` | unknown[] |

**Returns:** *InterfaceTypes[K]*

___

###  findMetaCall

▸ **findMetaCall**(`callIndex`: [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)): *[CallFunction](../interfaces/_packages_types_src_types_calls_.callfunction.md)*

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:170](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L170)*

**Parameters:**

Name | Type |
------ | ------ |
`callIndex` | [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[CallFunction](../interfaces/_packages_types_src_types_calls_.callfunction.md)*

___

###  findMetaError

▸ **findMetaError**(`errorIndex`: [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) | DispatchErrorModule): *[RegistryError](../interfaces/_packages_types_src_types_registry_.registryerror.md)*

*Defined in [packages/types/src/create/registry.ts:180](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L180)*

**Parameters:**

Name | Type |
------ | ------ |
`errorIndex` | [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) &#124; DispatchErrorModule |

**Returns:** *[RegistryError](../interfaces/_packages_types_src_types_registry_.registryerror.md)*

___

###  findMetaEvent

▸ **findMetaEvent**(`eventIndex`: [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)): *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹[EventData](_packages_types_src_generic_event_.eventdata.md)›*

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:193](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L193)*

**Parameters:**

Name | Type |
------ | ------ |
`eventIndex` | [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹[EventData](_packages_types_src_generic_event_.eventdata.md)›*

___

###  get

▸ **get**‹**T**›(`name`: string, `withUnknown?`: undefined | false | true): *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹T› | undefined*

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:202](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L202)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`withUnknown?` | undefined &#124; false &#124; true |

**Returns:** *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹T› | undefined*

___

###  getChainProperties

▸ **getChainProperties**(): *ChainProperties | undefined*

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:233](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L233)*

**Returns:** *ChainProperties | undefined*

___

###  getClassName

▸ **getClassName**(`clazz`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)): *string | undefined*

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:237](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L237)*

**Parameters:**

Name | Type |
------ | ------ |
`clazz` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md) |

**Returns:** *string | undefined*

___

###  getDefinition

▸ **getDefinition**(`name`: string): *string | undefined*

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:245](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L245)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string | undefined*

___

###  getOrThrow

▸ **getOrThrow**‹**T**›(`name`: string, `msg?`: undefined | string): *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹T›*

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:249](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L249)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`msg?` | undefined &#124; string |

**Returns:** *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹T›*

___

###  getOrUnknown

▸ **getOrUnknown**‹**T**›(`name`: string): *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹T›*

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:259](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L259)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹T›*

___

###  getSignedExtensionExtra

▸ **getSignedExtensionExtra**(): *Record‹string, keyof InterfaceTypes›*

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:263](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L263)*

**Returns:** *Record‹string, keyof InterfaceTypes›*

___

###  getSignedExtensionTypes

▸ **getSignedExtensionTypes**(): *Record‹string, keyof InterfaceTypes›*

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:267](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L267)*

**Returns:** *Record‹string, keyof InterfaceTypes›*

___

###  hasClass

▸ **hasClass**(`name`: string): *boolean*

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:271](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L271)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasDef

▸ **hasDef**(`name`: string): *boolean*

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:275](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L275)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasType

▸ **hasType**(`name`: string): *boolean*

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:279](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L279)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hash

▸ **hash**(`data`: [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:283](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L283)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

___

###  register

▸ **register**(`type`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md) | [RegistryTypes](../modules/_packages_types_src_types_registry_.md#registrytypes)): *void*

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:287](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L287)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md) &#124; [RegistryTypes](../modules/_packages_types_src_types_registry_.md#registrytypes) |

**Returns:** *void*

▸ **register**(`name`: string, `type`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)): *void*

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:290](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L290)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`type` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md) |

**Returns:** *void*

___

###  setChainProperties

▸ **setChainProperties**(`properties?`: [ChainProperties](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#chainproperties)): *void*

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:327](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L327)*

**Parameters:**

Name | Type |
------ | ------ |
`properties?` | [ChainProperties](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#chainproperties) |

**Returns:** *void*

___

###  setHasher

▸ **setHasher**(`hasher`: function): *void*

*Defined in [packages/types/src/create/registry.ts:333](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L333)*

**Parameters:**

▪`Default value`  **hasher**: *function*= blake2AsU8a

▸ (`data`: [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) |

**Returns:** *void*

___

###  setKnownTypes

▸ **setKnownTypes**(`knownTypes`: [RegisteredTypes](../interfaces/_packages_types_src_types_registry_.registeredtypes.md)): *void*

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:337](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L337)*

**Parameters:**

Name | Type |
------ | ------ |
`knownTypes` | [RegisteredTypes](../interfaces/_packages_types_src_types_registry_.registeredtypes.md) |

**Returns:** *void*

___

###  setMetadata

▸ **setMetadata**(`metadata`: [RegistryMetadata](../interfaces/_packages_types_src_types_registry_.registrymetadata.md), `signedExtensions?`: string[]): *void*

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:342](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L342)*

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | [RegistryMetadata](../interfaces/_packages_types_src_types_registry_.registrymetadata.md) |
`signedExtensions?` | string[] |

**Returns:** *void*

___

###  setSignedExtensions

▸ **setSignedExtensions**(`signedExtensions`: string[]): *void*

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:358](https://github.com/polkadot-js/api/blob/24d8915005/packages/types/src/create/registry.ts#L358)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`signedExtensions` | string[] | defaultExtensions |

**Returns:** *void*
