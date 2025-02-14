import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { remoteStore } from "./store/remoteStore.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={remoteStore}>
      <App />
    </Provider>
  </StrictMode>,
);
