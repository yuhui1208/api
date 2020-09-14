[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/staking/ownExposure"](_packages_api_derive_src_staking_ownexposure_.md)

# Module: "packages/api-derive/src/staking/ownExposure"

## Index

### Functions

* [_ownExposure](_packages_api_derive_src_staking_ownexposure_.md#_ownexposure)
* [_ownExposures](_packages_api_derive_src_staking_ownexposure_.md#_ownexposures)
* [ownExposure](_packages_api_derive_src_staking_ownexposure_.md#ownexposure)
* [ownExposures](_packages_api_derive_src_staking_ownexposure_.md#ownexposures)

## Functions

###  _ownExposure

▸ **_ownExposure**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/ownExposure.ts:16](https://github.com/polkadot-js/api/blob/e7be062522/packages/api-derive/src/staking/ownExposure.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string, `era`: EraIndex, `withActive`: boolean): *Observable‹DeriveOwnExposure›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |
`era` | EraIndex |
`withActive` | boolean |

___

###  _ownExposures

▸ **_ownExposures**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/ownExposure.ts:46](https://github.com/polkadot-js/api/blob/e7be062522/packages/api-derive/src/staking/ownExposure.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string, `eras`: EraIndex[], `withActive`: boolean): *Observable‹DeriveOwnExposure[]›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |
`eras` | EraIndex[] |
`withActive` | boolean |

___

###  ownExposure

▸ **ownExposure**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/ownExposure.ts:40](https://github.com/polkadot-js/api/blob/e7be062522/packages/api-derive/src/staking/ownExposure.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string, `era`: EraIndex): *Observable‹DeriveOwnExposure›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |
`era` | EraIndex |

___

###  ownExposures

▸ **ownExposures**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/ownExposure.ts:56](https://github.com/polkadot-js/api/blob/e7be062522/packages/api-derive/src/staking/ownExposure.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string, `withActive?`: undefined | false | true): *Observable‹DeriveOwnExposure[]›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |
`withActive?` | undefined &#124; false &#124; true |
