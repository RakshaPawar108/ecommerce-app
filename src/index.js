import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
  AuthProvider,
  CartProvider,
  FilterProvider,
  WishlistProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WishlistProvider>
        <CartProvider>
          <AuthProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </AuthProvider>
        </CartProvider>
      </WishlistProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
