from polywrap_plugin import PluginPackage
from .wrap import *

class KeyValueStoreConfig:
    def __init__(self, store: dict[str, bytes]):
        self.store = store

class KeyValueStoreModule(Module):
    def __init__(self, config: KeyValueStoreConfig):
        super().__init__(config)
        self.config = config
        
    def set(self, args: ArgsSet, client: object, env: None):
        self.config.store[args.key] = args.value
        return True
    def get(self, args: ArgsGet, client: object, env: None) -> Optional[bytes]:
        return self.config.store.get(args.key, None)

    def remove(self, args: ArgsRemove, client: object, env: None) -> bool:
        self.config.store.pop(args.key, None)
        return True

    def has(self, args: ArgsHas, client: object, env: None) -> bool:
        return args.key in self.config.store

    def keys(self, args: ArgsKeys, client: object, env: None) -> list[str]:
        return list(self.config.store.keys())

    def values(self, args: ArgsValues, client: object, env: None) -> list[bytes]:
        return list(self.config.store.values())

    def entries(self, args: ArgsEntries, client: object, env: None) -> list[dict]:
        return [{'key': key, 'value': value} for key, value in self.config.store.items()]

def key_value_store_plugin(config: KeyValueStoreConfig) -> PluginPackage:
    return PluginPackage(
        module=KeyValueStoreModule(config),
        manifest=manifest,
    )