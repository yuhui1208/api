[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api/src/base/Init"](../modules/_packages_api_src_base_init_.md) › [Init](_packages_api_src_base_init_.init.md)

# Class: Init ‹**ApiType**›

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_packages_api_src_types_base_.md#apitypes)*

## Hierarchy

  ↳ [Decorate](_packages_api_src_base_decorate_.decorate.md)‹ApiType›

  ↳ **Init**

## Index

### Constructors

* [constructor](_packages_api_src_base_init_.init.md#constructor)

### Accessors

* [hasSubscriptions](_packages_api_src_base_init_.init.md#hassubscriptions)
* [registry](_packages_api_src_base_init_.init.md#registry)

### Methods

* [createType](_packages_api_src_base_init_.init.md#createtype)
* [getBlockRegistry](_packages_api_src_base_init_.init.md#getblockregistry)
* [injectMetadata](_packages_api_src_base_init_.init.md#injectmetadata)
* [off](_packages_api_src_base_init_.init.md#off)
* [on](_packages_api_src_base_init_.init.md#on)
* [once](_packages_api_src_base_init_.init.md#once)
* [registerTypes](_packages_api_src_base_init_.init.md#registertypes)

## Constructors

###  constructor

\+ **new Init**(`options`: ApiOptions, `type`: [ApiTypes](../modules/_packages_api_src_types_base_.md#apitypes), `decorateMethod`: [DecorateMethod](../modules/_packages_api_src_types_base_.md#decoratemethod)‹ApiType›): *[Init](_packages_api_src_base_init_.init.md)*

*Overrides [Decorate](_packages_api_src_base_decorate_.decorate.md).[constructor](_packages_api_src_base_decorate_.decorate.md#constructor)*

*Defined in [packages/api/src/base/Init.ts:30](https://github.com/polkadot-js/api/blob/24d8915005/packages/api/src/base/Init.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | ApiOptions |
`type` | [ApiTypes](../modules/_packages_api_src_types_base_.md#apitypes) |
`decorateMethod` | [DecorateMethod](../modules/_packages_api_src_types_base_.md#decoratemethod)‹ApiType› |

**Returns:** *[Init](_packages_api_src_base_init_.init.md)*

## Accessors

###  hasSubscriptions

• **get hasSubscriptions**(): *boolean*

*Inherited from [Decorate](_packages_api_src_base_decorate_.decorate.md).[hasSubscriptions](_packages_api_src_base_decorate_.decorate.md#hassubscriptions)*

*Defined in [packages/api/src/base/Decorate.ts:174](https://github.com/polkadot-js/api/blob/24d8915005/packages/api/src/base/Decorate.ts#L174)*

**Returns:** *boolean*

`true` if the API operates with subscriptions

___

###  registry

• **get registry**(): *Registry*

*Inherited from [Decorate](_packages_api_src_base_decorate_.decorate.md).[registry](_packages_api_src_base_decorate_.decorate.md#registry)*

*Defined in [packages/api/src/base/Decorate.ts:153](https://github.com/polkadot-js/api/blob/24d8915005/packages/api/src/base/Decorate.ts#L153)*

**`description`** Return the current used registry

**Returns:** *Registry*

## Methods

###  createType

▸ **createType**‹**K**›(`type`: K, ...`params`: unknown[]): *InterfaceTypes[K]*

*Inherited from [Decorate](_packages_api_src_base_decorate_.decorate.md).[createType](_packages_api_src_base_decorate_.decorate.md#createtype)*

*Defined in [packages/api/src/base/Decorate.ts:160](https://github.com/polkadot-js/api/blob/24d8915005/packages/api/src/base/Decorate.ts#L160)*

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

###  getBlockRegistry

▸ **getBlockRegistry**(`blockHash`: string | Uint8Array): *Promise‹VersionedRegistry›*

*Defined in [packages/api/src/base/Init.ts:74](https://github.com/polkadot-js/api/blob/24d8915005/packages/api/src/base/Init.ts#L74)*

**`description`** Sets up a registry based on the block hash defined

**Parameters:**

Name | Type |
------ | ------ |
`blockHash` | string &#124; Uint8Array |

**Returns:** *Promise‹VersionedRegistry›*

___

###  injectMetadata

▸ **injectMetadata**(`metadata`: Metadata, `fromEmpty?`: undefined | false | true, `registry?`: Registry): *void*

*Inherited from [Decorate](_packages_api_src_base_decorate_.decorate.md).[injectMetadata](_packages_api_src_base_decorate_.decorate.md#injectmetadata)*

*Defined in [packages/api/src/base/Decorate.ts:178](https://github.com/polkadot-js/api/blob/24d8915005/packages/api/src/base/Decorate.ts#L178)*

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | Metadata |
`fromEmpty?` | undefined &#124; false &#124; true |
`registry?` | Registry |

**Returns:** *void*

___

###  off

▸ **off**(`type`: ApiInterfaceEvents, `handler`: function): *this*

*Inherited from [Events](_packages_api_src_base_events_.events.md).[off](_packages_api_src_base_events_.events.md#off)*

*Defined in [packages/api/src/base/Events.ts:62](https://github.com/polkadot-js/api/blob/24d8915005/packages/api/src/base/Events.ts#L62)*

**`description`** Remove the given eventemitter handler

**`example`** 
<BR>

```javascript
const handler = (): void => {
 console.log('Connected !);
};

// Start listening
api.on('connected', handler);

// Stop listening
api.off('connected', handler);
```

**Parameters:**

▪ **type**: *ApiInterfaceEvents*

The type of event the callback was attached to. Available events are `connected`, `disconnected`, `ready` and `error`

▪ **handler**: *function*

The callback to unregister.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`type`: ApiInterfaceEvents, `handler`: function): *this*

*Inherited from [Events](_packages_api_src_base_events_.events.md).[on](_packages_api_src_base_events_.events.md#on)*

*Defined in [packages/api/src/base/Events.ts:35](https://github.com/polkadot-js/api/blob/24d8915005/packages/api/src/base/Events.ts#L35)*

**`description`** Attach an eventemitter handler to listen to a specific event

**`example`** 
<BR>

```javascript
api.on('connected', (): void => {
  console.log('API has been connected to the endpoint');
});

api.on('disconnected', (): void => {
  console.log('API has been disconnected from the endpoint');
});
```

**Parameters:**

▪ **type**: *ApiInterfaceEvents*

The type of event to listen to. Available events are `connected`, `disconnected`, `ready` and `error`

▪ **handler**: *function*

The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`type`: ApiInterfaceEvents, `handler`: function): *this*

*Inherited from [Events](_packages_api_src_base_events_.events.md).[once](_packages_api_src_base_events_.events.md#once)*

*Defined in [packages/api/src/base/Events.ts:87](https://github.com/polkadot-js/api/blob/24d8915005/packages/api/src/base/Events.ts#L87)*

**`description`** Attach an one-time eventemitter handler to listen to a specific event

**`example`** 
<BR>

```javascript
api.once('connected', (): void => {
  console.log('API has been connected to the endpoint');
});

api.once('disconnected', (): void => {
  console.log('API has been disconnected from the endpoint');
});
```

**Parameters:**

▪ **type**: *ApiInterfaceEvents*

The type of event to listen to. Available events are `connected`, `disconnected`, `ready` and `error`

▪ **handler**: *function*

The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  registerTypes

▸ **registerTypes**(`types?`: RegistryTypes): *void*

*Inherited from [Decorate](_packages_api_src_base_decorate_.decorate.md).[registerTypes](_packages_api_src_base_decorate_.decorate.md#registertypes)*

*Defined in [packages/api/src/base/Decorate.ts:167](https://github.com/polkadot-js/api/blob/24d8915005/packages/api/src/base/Decorate.ts#L167)*

**`description`** Register additional user-defined of chain-specific types in the type registry

**Parameters:**

Name | Type |
------ | ------ |
`types?` | RegistryTypes |

**Returns:** *void*
