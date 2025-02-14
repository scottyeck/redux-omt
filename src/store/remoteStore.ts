import { proxy, wrap } from "comlink";
import type { WorkerStore } from "./workerStore";
import type { Action } from "@reduxjs/toolkit";

const _remoteStore = wrap<WorkerStore>(
  new Worker(new URL("./worker.ts", import.meta.url), {
    type: "module",
  }),
);
type RemoteStore = typeof _remoteStore;

export async function remoteStoreWrapper(remoteStore: RemoteStore) {
  const subscribers = new Set<() => void>();

  let latestState = await remoteStore.getState();
  remoteStore.subscribe(
    proxy(async () => {
      latestState = await remoteStore.getState();
      subscribers.forEach((f) => f());
    }),
  );

  return {
    getState: () => latestState,
    dispatch: (action: Action) => remoteStore.dispatch(action),
    subscribe: (callback: () => void) => {
      subscribers.add(callback);
      return () => subscribers.delete(callback);
    },
  };
}

export const remoteStore = await remoteStoreWrapper(_remoteStore);
