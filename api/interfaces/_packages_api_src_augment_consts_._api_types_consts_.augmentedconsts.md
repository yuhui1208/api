[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api/src/augment/consts"](../modules/_packages_api_src_augment_consts_.md) › ["api/types/consts"](../modules/_packages_api_src_augment_consts_._api_types_consts_.md) › [AugmentedConsts](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md)

# Interface: AugmentedConsts ‹**ApiType**›

## Type parameters

▪ **ApiType**

## Hierarchy

* **AugmentedConsts**

## Index

### Properties

* [babe](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#babe)
* [balances](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#balances)
* [contracts](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#contracts)
* [democracy](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#democracy)
* [elections](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#elections)
* [finalityTracker](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#finalitytracker)
* [identity](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#identity)
* [indices](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#indices)
* [proxy](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#proxy)
* [recovery](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#recovery)
* [society](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#society)
* [staking](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#staking)
* [system](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#system)
* [timestamp](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#timestamp)
* [transactionPayment](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#transactionpayment)
* [treasury](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#treasury)
* [vesting](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#vesting)

## Properties

###  babe

• **babe**: *object*

*Defined in [packages/api/src/augment/consts.ts:15](https://github.com/polkadot-js/api/blob/dac3261a16/packages/api/src/augment/consts.ts#L15)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **epochDuration**: *u64 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **expectedBlockTime**: *Moment & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  balances

• **balances**: *object*

*Defined in [packages/api/src/augment/consts.ts:31](https://github.com/polkadot-js/api/blob/dac3261a16/packages/api/src/augment/consts.ts#L31)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **existentialDeposit**: *Balance & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  contracts

• **contracts**: *object*

*Defined in [packages/api/src/augment/consts.ts:38](https://github.com/polkadot-js/api/blob/dac3261a16/packages/api/src/augment/consts.ts#L38)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **maxDepth**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maxValueSize**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **rentByteFee**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **rentDepositOffset**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **signedClaimHandicap**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **storageSizeOffset**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **surchargeReward**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **tombstoneDeposit**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  democracy

• **democracy**: *object*

*Defined in [packages/api/src/augment/consts.ts:89](https://github.com/polkadot-js/api/blob/dac3261a16/packages/api/src/augment/consts.ts#L89)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **cooloffPeriod**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **enactmentPeriod**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **fastTrackVotingPeriod**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **launchPeriod**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maxVotes**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **minimumDeposit**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **preimageByteDeposit**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **votingPeriod**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  elections

• **elections**: *object*

*Defined in [packages/api/src/augment/consts.ts:128](https://github.com/polkadot-js/api/blob/dac3261a16/packages/api/src/augment/consts.ts#L128)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **candidacyBond**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **desiredMembers**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **desiredRunnersUp**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **moduleId**: *LockIdentifier & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **termDuration**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **votingBond**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  finalityTracker

• **finalityTracker**: *object*

*Defined in [packages/api/src/augment/consts.ts:137](https://github.com/polkadot-js/api/blob/dac3261a16/packages/api/src/augment/consts.ts#L137)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **reportLatency**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **windowSize**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  identity

• **identity**: *object*

*Defined in [packages/api/src/augment/consts.ts:148](https://github.com/polkadot-js/api/blob/dac3261a16/packages/api/src/augment/consts.ts#L148)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **basicDeposit**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **fieldDeposit**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maxAdditionalFields**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maxRegistrars**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maxSubAccounts**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **subAccountDeposit**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  indices

• **indices**: *object*

*Defined in [packages/api/src/augment/consts.ts:179](https://github.com/polkadot-js/api/blob/dac3261a16/packages/api/src/augment/consts.ts#L179)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **deposit**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  proxy

• **proxy**: *object*

*Defined in [packages/api/src/augment/consts.ts:186](https://github.com/polkadot-js/api/blob/dac3261a16/packages/api/src/augment/consts.ts#L186)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **announcementDepositBase**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **announcementDepositFactor**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maxPending**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maxProxies**: *u16 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **proxyDepositBase**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **proxyDepositFactor**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  recovery

• **recovery**: *object*

*Defined in [packages/api/src/augment/consts.ts:213](https://github.com/polkadot-js/api/blob/dac3261a16/packages/api/src/augment/consts.ts#L213)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **configDepositBase**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **friendDepositFactor**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maxFriends**: *u16 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **recoveryDeposit**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  society

• **society**: *object*

*Defined in [packages/api/src/augment/consts.ts:232](https://github.com/polkadot-js/api/blob/dac3261a16/packages/api/src/augment/consts.ts#L232)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **candidateDeposit**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **challengePeriod**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maxStrikes**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **moduleId**: *ModuleId & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **periodSpend**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **rotationPeriod**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **wrongSideDeduction**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  staking

• **staking**: *object*

*Defined in [packages/api/src/augment/consts.ts:265](https://github.com/polkadot-js/api/blob/dac3261a16/packages/api/src/augment/consts.ts#L265)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **bondingDuration**: *EraIndex & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **electionLookahead**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maxIterations**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maxNominatorRewardedPerValidator**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **minSolutionScoreBump**: *Perbill & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **sessionsPerEra**: *SessionIndex & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **slashDeferDuration**: *EraIndex & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  system

• **system**: *object*

*Defined in [packages/api/src/augment/consts.ts:311](https://github.com/polkadot-js/api/blob/dac3261a16/packages/api/src/augment/consts.ts#L311)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **blockExecutionWeight**: *Weight & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **blockHashCount**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **dbWeight**: *RuntimeDbWeight & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **extrinsicBaseWeight**: *Weight & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maximumBlockLength**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maximumBlockWeight**: *Weight & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  timestamp

• **timestamp**: *object*

*Defined in [packages/api/src/augment/consts.ts:338](https://github.com/polkadot-js/api/blob/dac3261a16/packages/api/src/augment/consts.ts#L338)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **minimumPeriod**: *Moment & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  transactionPayment

• **transactionPayment**: *object*

*Defined in [packages/api/src/augment/consts.ts:348](https://github.com/polkadot-js/api/blob/dac3261a16/packages/api/src/augment/consts.ts#L348)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **transactionByteFee**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **weightToFee**: *Vec‹WeightToFeeCoefficient› & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  treasury

• **treasury**: *object*

*Defined in [packages/api/src/augment/consts.ts:359](https://github.com/polkadot-js/api/blob/dac3261a16/packages/api/src/augment/consts.ts#L359)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **burn**: *Permill & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **moduleId**: *ModuleId & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **proposalBond**: *Permill & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **proposalBondMinimum**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **spendPeriod**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **tipCountdown**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **tipFindersFee**: *Percent & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **tipReportDepositBase**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **tipReportDepositPerByte**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  vesting

• **vesting**: *object*

*Defined in [packages/api/src/augment/consts.ts:399](https://github.com/polkadot-js/api/blob/dac3261a16/packages/api/src/augment/consts.ts#L399)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **minVestedTransfer**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*
