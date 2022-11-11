import React from "react";
import { Navbar, Sidebar, Footer } from "./components/";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  AuthWrapper,
  Products,
  SingleProduct,
  Error,
  About,
  Cart,
} from "./pages/index";


function App() {
  return (
    <AuthWrapper>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </AuthWrapper>
  );
}

export default App;
