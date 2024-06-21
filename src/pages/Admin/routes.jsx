import { Route } from "react-router-dom";
import Home from "./Home";
import Orders from "./Orders";
import Products from "./Products";
import NewProuduct from "./Products/new";
import ProductDetail from "./ProductDetail";
import React from "react";

function Routes() {
  return (
    <React.Fragment>
      <Route path="home" element={<Home />} />
      <Route path="orders" element={<Orders />} />
      <Route path="products" element={<Products />} />
      <Route path="products/new" element={<NewProuduct />} />
      <Route path="products/:product_id" element={<ProductDetail />} />
    </React.Fragment>
  );
}

export default Routes;
