[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/staking/query"](_packages_api_derive_src_staking_query_.md)

# Module: "packages/api-derive/src/staking/query"

## Index

### Functions

* [query](_packages_api_derive_src_staking_query_.md#query)
* [queryMulti](_packages_api_derive_src_staking_query_.md#querymulti)

## Functions

###  query

▸ **query**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/query.ts:91](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/api-derive/src/staking/query.ts#L91)*

**`description`** From a stash, retrieve the controllerId and all relevant details

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string): *Observable‹DeriveStakingQuery›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |

___

###  queryMulti

▸ **queryMulti**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/query.ts:99](https://github.com/polkadot-js/api/blob/ad8ad42344/packages/api-derive/src/staking/query.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountIds`: (Uint8Array | string)[]): *Observable‹DeriveStakingQuery[]›*

**Parameters:**

Name | Type |
------ | ------ |
`accountIds` | (Uint8Array &#124; string)[] |
