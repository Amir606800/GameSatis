import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { StreamerProvider } from "./Context/StreamerProvider.jsx";
import { ProductsProvider } from "./Context/ProductsProvider.jsx";

createRoot(document.getElementById("root")).render(
    <ProductsProvider>
      <StreamerProvider>
        <App />
      </StreamerProvider>
    </ProductsProvider>
);
