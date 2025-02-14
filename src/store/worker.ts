import { store } from "./store";
import { expose } from "comlink";

expose(store);
