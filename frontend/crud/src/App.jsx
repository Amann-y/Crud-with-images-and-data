import React from "react";
import NavbarComp from "./components/NavbarComp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Addproduct from "./components/product_components/Addproduct";
import Product from "./components/product_components/Product";
import Updateproduct from "./components/product_components/Updateproduct";
import Imgupload from "./components/img_components/Imgupload";
import Images from "./components/img_components/Images";
import Updateimage from "./components/img_components/Updateimage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavbarComp />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/" element={<Product />} />
          <Route
            path="/product/getsingleproduct/:id"
            element={<Updateproduct />}
          />
          <Route path="/imgupload" element={<Imgupload />} />
          <Route path="/img" element={<Images />} />
          <Route path="/image/update/:id" element={<Updateimage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
