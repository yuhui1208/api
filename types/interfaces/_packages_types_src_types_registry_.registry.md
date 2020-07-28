[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/types/registry"](../modules/_packages_types_src_types_registry_.md) › [Registry](_packages_types_src_types_registry_.registry.md)

# Interface: Registry

## Hierarchy

* **Registry**

## Implemented by

* [TypeRegistry](../classes/_packages_types_src_create_registry_.typeregistry.md)

## Index

### Properties

* [chainDecimals](_packages_types_src_types_registry_.registry.md#readonly-chaindecimals)
* [chainSS58](_packages_types_src_types_registry_.registry.md#readonly-chainss58)
* [chainToken](_packages_types_src_types_registry_.registry.md#readonly-chaintoken)
* [knownTypes](_packages_types_src_types_registry_.registry.md#readonly-knowntypes)
* [signedExtensions](_packages_types_src_types_registry_.registry.md#readonly-signedextensions)

### Methods

* [createClass](_packages_types_src_types_registry_.registry.md#createclass)
* [createType](_packages_types_src_types_registry_.registry.md#createtype)
* [findMetaCall](_packages_types_src_types_registry_.registry.md#findmetacall)
* [findMetaError](_packages_types_src_types_registry_.registry.md#findmetaerror)
* [findMetaEvent](_packages_types_src_types_registry_.registry.md#findmetaevent)
* [get](_packages_types_src_types_registry_.registry.md#get)
* [getChainProperties](_packages_types_src_types_registry_.registry.md#getchainproperties)
* [getClassName](_packages_types_src_types_registry_.registry.md#getclassname)
* [getDefinition](_packages_types_src_types_registry_.registry.md#getdefinition)
* [getOrThrow](_packages_types_src_types_registry_.registry.md#getorthrow)
* [getOrUnknown](_packages_types_src_types_registry_.registry.md#getorunknown)
* [getSignedExtensionExtra](_packages_types_src_types_registry_.registry.md#getsignedextensionextra)
* [getSignedExtensionTypes](_packages_types_src_types_registry_.registry.md#getsignedextensiontypes)
* [hasClass](_packages_types_src_types_registry_.registry.md#hasclass)
* [hasDef](_packages_types_src_types_registry_.registry.md#hasdef)
* [hasType](_packages_types_src_types_registry_.registry.md#hastype)
* [register](_packages_types_src_types_registry_.registry.md#register)
* [setChainProperties](_packages_types_src_types_registry_.registry.md#setchainproperties)
* [setKnownTypes](_packages_types_src_types_registry_.registry.md#setknowntypes)
* [setMetadata](_packages_types_src_types_registry_.registry.md#setmetadata)
* [setSignedExtensions](_packages_types_src_types_registry_.registry.md#setsignedextensions)

## Properties

### `Readonly` chainDecimals

• **chainDecimals**: *number*

*Defined in [packages/types/src/types/registry.ts:127](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L127)*

___

### `Readonly` chainSS58

• **chainSS58**: *number | undefined*

*Defined in [packages/types/src/types/registry.ts:128](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L128)*

___

### `Readonly` chainToken

• **chainToken**: *string*

*Defined in [packages/types/src/types/registry.ts:129](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L129)*

___

### `Readonly` knownTypes

• **knownTypes**: *[RegisteredTypes](_packages_types_src_types_registry_.registeredtypes.md)*

*Defined in [packages/types/src/types/registry.ts:130](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L130)*

___

### `Readonly` signedExtensions

• **signedExtensions**: *string[]*

*Defined in [packages/types/src/types/registry.ts:131](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L131)*

## Methods

###  createClass

▸ **createClass**‹**K**›(`type`: K): *[Constructor](_packages_types_src_types_codec_.constructor.md)‹InterfaceTypes[K]›*

*Defined in [packages/types/src/types/registry.ts:139](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L139)*

**Type parameters:**

▪ **K**: *keyof InterfaceTypes*

**Parameters:**

Name | Type |
------ | ------ |
`type` | K |

**Returns:** *[Constructor](_packages_types_src_types_codec_.constructor.md)‹InterfaceTypes[K]›*

___

###  createType

▸ **createType**‹**K**›(`type`: K, ...`params`: unknown[]): *InterfaceTypes[K]*

*Defined in [packages/types/src/types/registry.ts:140](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L140)*

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

▸ **findMetaCall**(`callIndex`: [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array)): *[CallFunction](_packages_types_src_types_calls_.callfunction.md)*

*Defined in [packages/types/src/types/registry.ts:133](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L133)*

**Parameters:**

Name | Type |
------ | ------ |
`callIndex` | [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[CallFunction](_packages_types_src_types_calls_.callfunction.md)*

___

###  findMetaError

▸ **findMetaError**(`errorIndex`: [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array)): *[RegistryError](_packages_types_src_types_registry_.registryerror.md)*

*Defined in [packages/types/src/types/registry.ts:134](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L134)*

**Parameters:**

Name | Type |
------ | ------ |
`errorIndex` | [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[RegistryError](_packages_types_src_types_registry_.registryerror.md)*

___

###  findMetaEvent

▸ **findMetaEvent**(`eventIndex`: [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array)): *[Constructor](_packages_types_src_types_codec_.constructor.md)‹any›*

*Defined in [packages/types/src/types/registry.ts:137](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L137)*

**Parameters:**

Name | Type |
------ | ------ |
`eventIndex` | [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[Constructor](_packages_types_src_types_codec_.constructor.md)‹any›*

___

###  get

▸ **get**‹**T**›(`name`: string, `withUnknown?`: undefined | false | true): *[Constructor](_packages_types_src_types_codec_.constructor.md)‹T› | undefined*

*Defined in [packages/types/src/types/registry.ts:141](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L141)*

**Type parameters:**

▪ **T**: *[Codec](_packages_types_src_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`withUnknown?` | undefined &#124; false &#124; true |

**Returns:** *[Constructor](_packages_types_src_types_codec_.constructor.md)‹T› | undefined*

___

###  getChainProperties

▸ **getChainProperties**(): *ChainProperties | undefined*

*Defined in [packages/types/src/types/registry.ts:142](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L142)*

**Returns:** *ChainProperties | undefined*

___

###  getClassName

▸ **getClassName**(`clazz`: [Constructor](_packages_types_src_types_codec_.constructor.md)): *string | undefined*

*Defined in [packages/types/src/types/registry.ts:143](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L143)*

**Parameters:**

Name | Type |
------ | ------ |
`clazz` | [Constructor](_packages_types_src_types_codec_.constructor.md) |

**Returns:** *string | undefined*

___

###  getDefinition

▸ **getDefinition**(`name`: string): *string | undefined*

*Defined in [packages/types/src/types/registry.ts:144](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L144)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string | undefined*

___

###  getOrThrow

▸ **getOrThrow**‹**T**›(`name`: string, `msg?`: undefined | string): *[Constructor](_packages_types_src_types_codec_.constructor.md)‹T›*

*Defined in [packages/types/src/types/registry.ts:145](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L145)*

**Type parameters:**

▪ **T**: *[Codec](_packages_types_src_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`msg?` | undefined &#124; string |

**Returns:** *[Constructor](_packages_types_src_types_codec_.constructor.md)‹T›*

___

###  getOrUnknown

▸ **getOrUnknown**‹**T**›(`name`: string): *[Constructor](_packages_types_src_types_codec_.constructor.md)‹T›*

*Defined in [packages/types/src/types/registry.ts:146](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L146)*

**Type parameters:**

▪ **T**: *[Codec](_packages_types_src_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[Constructor](_packages_types_src_types_codec_.constructor.md)‹T›*

___

###  getSignedExtensionExtra

▸ **getSignedExtensionExtra**(): *Record‹string, keyof InterfaceTypes›*

*Defined in [packages/types/src/types/registry.ts:148](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L148)*

**Returns:** *Record‹string, keyof InterfaceTypes›*

___

###  getSignedExtensionTypes

▸ **getSignedExtensionTypes**(): *Record‹string, keyof InterfaceTypes›*

*Defined in [packages/types/src/types/registry.ts:149](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L149)*

**Returns:** *Record‹string, keyof InterfaceTypes›*

___

###  hasClass

▸ **hasClass**(`name`: string): *boolean*

*Defined in [packages/types/src/types/registry.ts:150](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L150)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasDef

▸ **hasDef**(`name`: string): *boolean*

*Defined in [packages/types/src/types/registry.ts:151](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L151)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasType

▸ **hasType**(`name`: string): *boolean*

*Defined in [packages/types/src/types/registry.ts:152](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L152)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  register

▸ **register**(`type`: [Constructor](_packages_types_src_types_codec_.constructor.md) | [RegistryTypes](../modules/_packages_types_src_types_registry_.md#registrytypes)): *void*

*Defined in [packages/types/src/types/registry.ts:153](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L153)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Constructor](_packages_types_src_types_codec_.constructor.md) &#124; [RegistryTypes](../modules/_packages_types_src_types_registry_.md#registrytypes) |

**Returns:** *void*

▸ **register**(`name`: string, `type`: [Constructor](_packages_types_src_types_codec_.constructor.md)): *void*

*Defined in [packages/types/src/types/registry.ts:154](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L154)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`type` | [Constructor](_packages_types_src_types_codec_.constructor.md) |

**Returns:** *void*

▸ **register**(`arg1`: string | [Constructor](_packages_types_src_types_codec_.constructor.md) | [RegistryTypes](../modules/_packages_types_src_types_registry_.md#registrytypes), `arg2?`: [Constructor](_packages_types_src_types_codec_.constructor.md)): *void*

*Defined in [packages/types/src/types/registry.ts:155](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L155)*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | string &#124; [Constructor](_packages_types_src_types_codec_.constructor.md) &#124; [RegistryTypes](../modules/_packages_types_src_types_registry_.md#registrytypes) |
`arg2?` | [Constructor](_packages_types_src_types_codec_.constructor.md) |

**Returns:** *void*

___

###  setChainProperties

▸ **setChainProperties**(`properties?`: [ChainProperties](_packages_types_src_augment_registry_._registry_.interfacetypes.md#chainproperties)): *void*

*Defined in [packages/types/src/types/registry.ts:156](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L156)*

**Parameters:**

Name | Type |
------ | ------ |
`properties?` | [ChainProperties](_packages_types_src_augment_registry_._registry_.interfacetypes.md#chainproperties) |

**Returns:** *void*

___

###  setKnownTypes

▸ **setKnownTypes**(`types`: [RegisteredTypes](_packages_types_src_types_registry_.registeredtypes.md)): *void*

*Defined in [packages/types/src/types/registry.ts:147](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L147)*

**Parameters:**

Name | Type |
------ | ------ |
`types` | [RegisteredTypes](_packages_types_src_types_registry_.registeredtypes.md) |

**Returns:** *void*

___

###  setMetadata

▸ **setMetadata**(`metadata`: [RegistryMetadata](_packages_types_src_types_registry_.registrymetadata.md), `signedExtensions?`: string[]): *void*

*Defined in [packages/types/src/types/registry.ts:157](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L157)*

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | [RegistryMetadata](_packages_types_src_types_registry_.registrymetadata.md) |
`signedExtensions?` | string[] |

**Returns:** *void*

___

###  setSignedExtensions

▸ **setSignedExtensions**(`signedExtensions?`: string[]): *void*

*Defined in [packages/types/src/types/registry.ts:158](https://github.com/polkadot-js/api/blob/ce0523eb1/packages/types/src/types/registry.ts#L158)*

**Parameters:**

Name | Type |
------ | ------ |
`signedExtensions?` | string[] |

**Returns:** *void*
