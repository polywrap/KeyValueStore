import { MaybeAsync } from "@polywrap/core-js";
import {
  Args_entries,
  Args_get,
  Args_has,
  Args_keys,
  Args_remove,
  Args_set,
  Args_values,
  CoreClient,
  KeyValuePair,
  Module,
  manifest,
} from "./wrap";

import { PluginFactory, PluginPackage } from "@polywrap/plugin-js";

export interface KeyValueStorePluginConfig {
  store: Map<string, Uint8Array>;
}

export class KeyValueStorePlugin extends Module<KeyValueStorePluginConfig> {
  constructor(config: KeyValueStorePluginConfig) {
    super(config);
  }
  
  set(
    args: Args_set,
    client: CoreClient,
    env?: null | undefined
  ): MaybeAsync<boolean> {
    this.config.store.set(args.key, args.value);

    return true;
  }
  get(
    args: Args_get,
    client: CoreClient,
    env?: null | undefined
  ): MaybeAsync<Uint8Array | null> {
    return this.config.store.get(args.key) ?? null;
  }
  remove(
    args: Args_remove,
    client: CoreClient,
    env?: null | undefined
  ): MaybeAsync<boolean> {
    this.config.store.delete(args.key);

    return true;
  }
  has(
    args: Args_has,
    client: CoreClient,
    env?: null | undefined
  ): MaybeAsync<boolean> {
    return this.config.store.has(args.key);
  }
  keys(
    args: Args_keys,
    client: CoreClient,
    env?: null | undefined
  ): MaybeAsync<string[]> {
    return Array.from(this.config.store.keys());
  }
  values(
    args: Args_values,
    client: CoreClient,
    env?: null | undefined
  ): MaybeAsync<Uint8Array[]> {
    return Array.from(this.config.store.values());
  }
  entries(
    args: Args_entries,
    client: CoreClient,
    env?: null | undefined
  ): MaybeAsync<KeyValuePair[]> {
    return Array.from(this.config.store.entries()).map(([key, value]) => ({
      key,
      value,
    }));
  }
}

export const keyValueStorePlugin: PluginFactory<KeyValueStorePluginConfig> = (
  config: KeyValueStorePluginConfig
) => {
  return new PluginPackage(new KeyValueStorePlugin(config), manifest);
};

export const plugin = keyValueStorePlugin;
