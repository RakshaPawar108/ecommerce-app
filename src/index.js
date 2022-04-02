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
    <AuthProvider>
      <WishlistProvider>
        <CartProvider>
          <FilterProvider>
            <Router>
              <App />
            </Router>
          </FilterProvider>
        </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
