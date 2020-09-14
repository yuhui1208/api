[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api/src/types/base"](_packages_api_src_types_base_.md)

# Module: "packages/api/src/types/base"

## Index

### Interfaces

* [DecorateMethodOptions](../interfaces/_packages_api_src_types_base_.decoratemethodoptions.md)
* [PaginationOptions](../interfaces/_packages_api_src_types_base_.paginationoptions.md)
* [PromiseResult](../interfaces/_packages_api_src_types_base_.promiseresult.md)
* [RxResult](../interfaces/_packages_api_src_types_base_.rxresult.md)

### Type aliases

* [ApiTypes](_packages_api_src_types_base_.md#apitypes)
* [Cons](_packages_api_src_types_base_.md#cons)
* [DecorateFn](_packages_api_src_types_base_.md#decoratefn)
* [DecorateMethod](_packages_api_src_types_base_.md#decoratemethod)
* [MethodResult](_packages_api_src_types_base_.md#methodresult)
* [ObsInnerType](_packages_api_src_types_base_.md#obsinnertype)
* [PromiseOrObs](_packages_api_src_types_base_.md#promiseorobs)
* [Push](_packages_api_src_types_base_.md#push)
* [UnsubscribePromise](_packages_api_src_types_base_.md#unsubscribepromise)
* [VoidFn](_packages_api_src_types_base_.md#voidfn)

## Type aliases

###  ApiTypes

Ƭ **ApiTypes**: *"promise" | "rxjs"*

*Defined in [packages/api/src/types/base.ts:30](https://github.com/polkadot-js/api/blob/918bb73547/packages/api/src/types/base.ts#L30)*

___

###  Cons

Ƭ **Cons**: *function extends function ? R : never*

*Defined in [packages/api/src/types/base.ts:12](https://github.com/polkadot-js/api/blob/918bb73547/packages/api/src/types/base.ts#L12)*

___

###  DecorateFn

Ƭ **DecorateFn**: *function*

*Defined in [packages/api/src/types/base.ts:77](https://github.com/polkadot-js/api/blob/918bb73547/packages/api/src/types/base.ts#L77)*

#### Type declaration:

▸ (...`args`: any[]): *Observable‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  DecorateMethod

Ƭ **DecorateMethod**: *function*

*Defined in [packages/api/src/types/base.ts:86](https://github.com/polkadot-js/api/blob/918bb73547/packages/api/src/types/base.ts#L86)*

#### Type declaration:

▸ ‹**Method**›(`method`: Method, `options?`: [DecorateMethodOptions](../interfaces/_packages_api_src_types_base_.decoratemethodoptions.md)): *any*

**Type parameters:**

▪ **Method**: *function*

**Parameters:**

Name | Type |
------ | ------ |
`method` | Method |
`options?` | [DecorateMethodOptions](../interfaces/_packages_api_src_types_base_.decoratemethodoptions.md) |

___

###  MethodResult

Ƭ **MethodResult**: *ApiType extends "rxjs" ? RxResult‹F› : PromiseResult‹F›*

*Defined in [packages/api/src/types/base.ts:66](https://github.com/polkadot-js/api/blob/918bb73547/packages/api/src/types/base.ts#L66)*

___

###  ObsInnerType

Ƭ **ObsInnerType**: *O extends Observable‹infer U› ? U : never*

*Defined in [packages/api/src/types/base.ts:33](https://github.com/polkadot-js/api/blob/918bb73547/packages/api/src/types/base.ts#L33)*

___

###  PromiseOrObs

Ƭ **PromiseOrObs**: *ApiType extends "rxjs" ? Observable‹T› : Promise‹T›*

*Defined in [packages/api/src/types/base.ts:40](https://github.com/polkadot-js/api/blob/918bb73547/packages/api/src/types/base.ts#L40)*

___

###  Push

Ƭ **Push**: *Cons‹any, Required‹T›› extends infer R ? object : never extends infer P ? P extends any[] ? P : never : never*

*Defined in [packages/api/src/types/base.ts:20](https://github.com/polkadot-js/api/blob/918bb73547/packages/api/src/types/base.ts#L20)*

___

###  UnsubscribePromise

Ƭ **UnsubscribePromise**: *Promise‹[VoidFn](_packages_api_src_types_base_.md#voidfn)›*

*Defined in [packages/api/src/types/base.ts:37](https://github.com/polkadot-js/api/blob/918bb73547/packages/api/src/types/base.ts#L37)*

___

###  VoidFn

Ƭ **VoidFn**: *function*

*Defined in [packages/api/src/types/base.ts:35](https://github.com/polkadot-js/api/blob/918bb73547/packages/api/src/types/base.ts#L35)*

#### Type declaration:

▸ (): *void*
