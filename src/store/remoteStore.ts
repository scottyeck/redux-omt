import { wrap } from "comlink";
import { AppStore } from "./store";

export const remoteStore = wrap<AppStore>(new Worker("./worker.ts"));
