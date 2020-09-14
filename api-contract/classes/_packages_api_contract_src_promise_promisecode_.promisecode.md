[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-contract/src/promise/PromiseCode"](../modules/_packages_api_contract_src_promise_promisecode_.md) › [PromiseCode](_packages_api_contract_src_promise_promisecode_.promisecode.md)

# Class: PromiseCode

## Hierarchy

  ↳ [Code](_packages_api_contract_src_base_code_.code.md)‹"promise"›

  ↳ **PromiseCode**

## Implements

* ContractBase‹"promise"›

## Index

### Constructors

* [constructor](_packages_api_contract_src_promise_promisecode_.promisecode.md#constructor)

### Properties

* [abi](_packages_api_contract_src_promise_promisecode_.promisecode.md#readonly-abi)
* [api](_packages_api_contract_src_promise_promisecode_.promisecode.md#readonly-api)
* [code](_packages_api_contract_src_promise_promisecode_.promisecode.md#readonly-code)
* [decorateMethod](_packages_api_contract_src_promise_promisecode_.promisecode.md#readonly-decoratemethod)
* [registry](_packages_api_contract_src_promise_promisecode_.promisecode.md#readonly-registry)

### Accessors

* [messages](_packages_api_contract_src_promise_promisecode_.promisecode.md#messages)

### Methods

* [createBlueprint](_packages_api_contract_src_promise_promisecode_.promisecode.md#createblueprint)
* [getMessage](_packages_api_contract_src_promise_promisecode_.promisecode.md#getmessage)

## Constructors

###  constructor

\+ **new PromiseCode**(`api`: ApiPromise, `abi`: ContractABIPre | Abi, `wasm`: string | Uint8Array): *[PromiseCode](_packages_api_contract_src_promise_promisecode_.promisecode.md)*

*Overrides [Code](_packages_api_contract_src_base_code_.code.md).[constructor](_packages_api_contract_src_base_code_.code.md#constructor)*

*Defined in [packages/api-contract/src/promise/PromiseCode.ts:13](https://github.com/polkadot-js/api/blob/e7be062522/packages/api-contract/src/promise/PromiseCode.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiPromise |
`abi` | ContractABIPre &#124; Abi |
`wasm` | string &#124; Uint8Array |

**Returns:** *[PromiseCode](_packages_api_contract_src_promise_promisecode_.promisecode.md)*

## Properties

### `Readonly` abi

• **abi**: *Abi*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[abi](_packages_api_contract_src_base_util_.base.md#readonly-abi)*

*Defined in [packages/api-contract/src/base/util.ts:14](https://github.com/polkadot-js/api/blob/e7be062522/packages/api-contract/src/base/util.ts#L14)*

___

### `Readonly` api

• **api**: *ApiObject‹"promise"›*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[api](_packages_api_contract_src_base_util_.base.md#readonly-api)*

*Defined in [packages/api-contract/src/base/util.ts:16](https://github.com/polkadot-js/api/blob/e7be062522/packages/api-contract/src/base/util.ts#L16)*

___

### `Readonly` code

• **code**: *Uint8Array*

*Inherited from [Code](_packages_api_contract_src_base_code_.code.md).[code](_packages_api_contract_src_base_code_.code.md#readonly-code)*

*Defined in [packages/api-contract/src/base/Code.ts:39](https://github.com/polkadot-js/api/blob/e7be062522/packages/api-contract/src/base/Code.ts#L39)*

___

### `Readonly` decorateMethod

• **decorateMethod**: *DecorateMethod‹"promise"›*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[decorateMethod](_packages_api_contract_src_base_util_.base.md#readonly-decoratemethod)*

*Defined in [packages/api-contract/src/base/util.ts:18](https://github.com/polkadot-js/api/blob/e7be062522/packages/api-contract/src/base/util.ts#L18)*

___

### `Readonly` registry

• **registry**: *Registry*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[registry](_packages_api_contract_src_base_util_.base.md#readonly-registry)*

*Defined in [packages/api-contract/src/base/util.ts:20](https://github.com/polkadot-js/api/blob/e7be062522/packages/api-contract/src/base/util.ts#L20)*

## Accessors

###  messages

• **get messages**(): *ContractMessage[]*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[messages](_packages_api_contract_src_base_util_.base.md#messages)*

*Defined in [packages/api-contract/src/base/util.ts:31](https://github.com/polkadot-js/api/blob/e7be062522/packages/api-contract/src/base/util.ts#L31)*

**Returns:** *ContractMessage[]*

## Methods

###  createBlueprint

▸ **createBlueprint**(`maxGas`: number | BN): *[CodePutCode](../interfaces/_packages_api_contract_src_base_code_.codeputcode.md)‹"promise"›*

*Inherited from [Code](_packages_api_contract_src_base_code_.code.md).[createBlueprint](_packages_api_contract_src_base_code_.code.md#createblueprint)*

*Defined in [packages/api-contract/src/base/Code.ts:47](https://github.com/polkadot-js/api/blob/e7be062522/packages/api-contract/src/base/Code.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`maxGas` | number &#124; BN |

**Returns:** *[CodePutCode](../interfaces/_packages_api_contract_src_base_code_.codeputcode.md)‹"promise"›*

___

###  getMessage

▸ **getMessage**(`nameOrIndex?`: string | number): *ContractMessage*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[getMessage](_packages_api_contract_src_base_util_.base.md#getmessage)*

*Defined in [packages/api-contract/src/base/util.ts:41](https://github.com/polkadot-js/api/blob/e7be062522/packages/api-contract/src/base/util.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`nameOrIndex?` | string &#124; number |

**Returns:** *ContractMessage*
