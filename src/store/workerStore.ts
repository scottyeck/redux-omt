import { store } from "./store";
import type { Action } from "@reduxjs/toolkit";

export interface WorkerStore {
  getState: () => Promise<ReturnType<typeof store.getState>>;
  dispatch: (action: Action) => Promise<void>;
  subscribe: (listener: () => void) => Promise<() => void>;
}

export const workerStore: WorkerStore = {
  getState: async () => {
    return store.getState();
  },
  dispatch: async (action) => {
    store.dispatch(action);
  },
  subscribe: async (listener) => store.subscribe(listener),
};
