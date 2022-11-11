import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
// import { Auth0Provider } from '@auth0/auth0-react'
//dev-zbqpfbftz5h2ae51.us.auth0.com
//l5YiVmJWkepaTg2u1BYoHhE8aihUGY5q
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-zbqpfbftz5h2ae51.us.auth0.com"
    clientId="l5YiVmJWkepaTg2u1BYoHhE8aihUGY5q"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
