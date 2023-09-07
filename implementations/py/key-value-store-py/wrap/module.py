# NOTE: This is an auto-generated file. All modifications will be overwritten.
# type: ignore
from __future__ import annotations

from abc import abstractmethod
from typing import TypeVar, Generic, TypedDict, Optional

from .types import *

from polywrap_core import InvokerClient
from polywrap_plugin import PluginModule
from polywrap_msgpack import GenericMap

TConfig = TypeVar("TConfig")


ArgsSet = TypedDict("ArgsSet", {
    "key": str,
    "value": bytes
})

ArgsGet = TypedDict("ArgsGet", {
    "key": str
})

ArgsRemove = TypedDict("ArgsRemove", {
    "key": str
})

ArgsHas = TypedDict("ArgsHas", {
    "key": str
})

ArgsKeys = TypedDict("ArgsKeys", {
})

ArgsValues = TypedDict("ArgsValues", {
})

ArgsEntries = TypedDict("ArgsEntries", {
})


class Module(Generic[TConfig], PluginModule[TConfig]):
    def __new__(cls, *args, **kwargs):
        # NOTE: This is used to dynamically add WRAP ABI compatible methods to the class
        instance = super().__new__(cls)
        setattr(instance, "set", instance.r_set)
        setattr(instance, "get", instance.get)
        setattr(instance, "remove", instance.remove)
        setattr(instance, "has", instance.has)
        setattr(instance, "keys", instance.keys)
        setattr(instance, "values", instance.values)
        setattr(instance, "entries", instance.entries)
        return instance

    @abstractmethod
    def r_set(
        self,
        args: ArgsSet,
        client: InvokerClient,
        env: None
    ) -> bool:
        pass

    @abstractmethod
    def get(
        self,
        args: ArgsGet,
        client: InvokerClient,
        env: None
    ) -> Optional[bytes]:
        pass

    @abstractmethod
    def remove(
        self,
        args: ArgsRemove,
        client: InvokerClient,
        env: None
    ) -> bool:
        pass

    @abstractmethod
    def has(
        self,
        args: ArgsHas,
        client: InvokerClient,
        env: None
    ) -> bool:
        pass

    @abstractmethod
    def keys(
        self,
        args: ArgsKeys,
        client: InvokerClient,
        env: None
    ) -> list[str]:
        pass

    @abstractmethod
    def values(
        self,
        args: ArgsValues,
        client: InvokerClient,
        env: None
    ) -> list[bytes]:
        pass

    @abstractmethod
    def entries(
        self,
        args: ArgsEntries,
        client: InvokerClient,
        env: None
    ) -> list["KeyValuePair"]:
        pass
