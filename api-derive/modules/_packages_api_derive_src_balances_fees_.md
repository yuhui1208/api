[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/balances/fees"](_packages_api_derive_src_balances_fees_.md)

# Module: "packages/api-derive/src/balances/fees"

## Index

### Functions

* [fees](_packages_api_derive_src_balances_fees_.md#fees)

## Functions

###  fees

▸ **fees**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/balances/fees.ts:27](https://github.com/polkadot-js/api/blob/dac3261a16/packages/api-derive/src/balances/fees.ts#L27)*

**`name`** fees

**`example`** 
<BR>

```javascript
api.derive.balances.fees(({ creationFee, transferFee }) => {
  console.log(`The fee for creating a new account on this chain is ${creationFee} units. The fee required for making a transfer is ${transferFee} units.`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

An object containing the combined results of the storage queries for
all relevant fees as declared in the substrate chain spec.

▸ (): *Observable‹DeriveFees›*
