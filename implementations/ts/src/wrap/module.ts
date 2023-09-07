/// NOTE: This is an auto-generated file.
///       All modifications will be overwritten.

// @ts-ignore
import * as Types from "./types";

// @ts-ignore
import { CoreClient, MaybeAsync } from "@polywrap/core-js";
import { PluginModule } from "@polywrap/plugin-js";

export interface Args_set {
  key: Types.String;
  value: Types.Bytes;
}

export interface Args_get {
  key: Types.String;
}

export interface Args_remove {
  key: Types.String;
}

export interface Args_has {
  key: Types.String;
}

export interface Args_keys {
}

export interface Args_values {
}

export interface Args_entries {
}

export abstract class Module<TConfig> extends PluginModule<TConfig> {
  abstract set(
    args: Args_set,
    client: CoreClient,
    env?: null
  ): MaybeAsync<Types.Boolean>;

  abstract get(
    args: Args_get,
    client: CoreClient,
    env?: null
  ): MaybeAsync<Types.Bytes | null>;

  abstract remove(
    args: Args_remove,
    client: CoreClient,
    env?: null
  ): MaybeAsync<Types.Boolean>;

  abstract has(
    args: Args_has,
    client: CoreClient,
    env?: null
  ): MaybeAsync<Types.Boolean>;

  abstract keys(
    args: Args_keys,
    client: CoreClient,
    env?: null
  ): MaybeAsync<Array<Types.String>>;

  abstract values(
    args: Args_values,
    client: CoreClient,
    env?: null
  ): MaybeAsync<Array<Types.Bytes>>;

  abstract entries(
    args: Args_entries,
    client: CoreClient,
    env?: null
  ): MaybeAsync<Array<Types.KeyValuePair>>;
}
