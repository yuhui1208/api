[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/create/createClass"](_packages_types_src_create_createclass_.md)

# Module: "packages/types/src/create/createClass"

## Index

### Functions

* [ClassOf](_packages_types_src_create_createclass_.md#classof)
* [ClassOfUnsafe](_packages_types_src_create_createclass_.md#classofunsafe)
* [createClass](_packages_types_src_create_createclass_.md#createclass)
* [getTypeClass](_packages_types_src_create_createclass_.md#gettypeclass)

## Functions

###  ClassOf

▸ **ClassOf**‹**K**›(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `name`: K): *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹InterfaceTypes[K]›*

*Defined in [packages/types/src/create/createClass.ts:43](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/create/createClass.ts#L43)*

**Type parameters:**

▪ **K**: *keyof InterfaceTypes*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`name` | K |

**Returns:** *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹InterfaceTypes[K]›*

___

###  ClassOfUnsafe

▸ **ClassOfUnsafe**‹**T**, **K**›(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `name`: K): *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹FromReg‹T, K››*

*Defined in [packages/types/src/create/createClass.ts:38](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/create/createClass.ts#L38)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

▪ **K**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`name` | K |

**Returns:** *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹FromReg‹T, K››*

___

###  createClass

▸ **createClass**‹**T**, **K**›(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `type`: K): *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹FromReg‹T, K››*

*Defined in [packages/types/src/create/createClass.ts:30](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/create/createClass.ts#L30)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

▪ **K**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`type` | K |

**Returns:** *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹FromReg‹T, K››*

___

###  getTypeClass

▸ **getTypeClass**‹**T**›(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `value`: TypeDef): *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹T›*

*Defined in [packages/types/src/create/createClass.ts:182](https://github.com/polkadot-js/api/blob/e425a38a7c/packages/types/src/create/createClass.ts#L182)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`value` | TypeDef |

**Returns:** *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹T›*
