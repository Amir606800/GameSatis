import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { StreamerProvider } from "./Context/StreamerProvider.jsx";
import { ProductsProvider } from "./Context/ProductsProvider.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { Provider } from "react-redux";
import store from "./tools/store/store.js";
import { CatehoryProvider } from "./Context/CategoryContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ProductsProvider>
      <StreamerProvider>
        <CatehoryProvider>
        <Provider store={store}>
          <App />
        </Provider>
        </CatehoryProvider>
      </StreamerProvider>
    </ProductsProvider>
  </AuthProvider>
);
