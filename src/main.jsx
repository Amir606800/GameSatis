import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { StreamerProvider } from "./Context/StreamerProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StreamerProvider>
      <App />
    </StreamerProvider>
  </StrictMode>
);
