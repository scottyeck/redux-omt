import { expose } from "comlink";
import { workerStore } from "./workerStore";

expose(workerStore);
