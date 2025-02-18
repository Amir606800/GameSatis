import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { StreamerProvider } from "./Context/StreamerProvider.jsx";
import { ProductsProvider } from "./Context/ProductsProvider.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ProductsProvider>
      <StreamerProvider>
        <App />
      </StreamerProvider>
    </ProductsProvider>
    </AuthProvider>
);
