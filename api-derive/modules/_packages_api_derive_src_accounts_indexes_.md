[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/accounts/indexes"](_packages_api_derive_src_accounts_indexes_.md)

# Module: "packages/api-derive/src/accounts/indexes"

## Index

### Functions

* [indexes](_packages_api_derive_src_accounts_indexes_.md#indexes)

## Functions

###  indexes

▸ **indexes**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/accounts/indexes.ts:75](https://github.com/polkadot-js/api/blob/918bb73547/packages/api-derive/src/accounts/indexes.ts#L75)*

**`name`** indexes

**`description`** This is an unwieldly query since it loops through
all of the enumsets and returns all of the values found. This could be up to 32k depending
on the number of active accounts in the system

**`example`** 
<BR>

```javascript
api.derive.accounts.indexes((indexes) => {
  console.log('All existing AccountIndexes', indexes);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

Returns all the indexes on the system.

▸ (): *Observable‹AccountIndexes›*
