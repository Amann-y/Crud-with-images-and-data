import express from "express";
import {
  addProduct,
  getProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// Add Product
router.post("/addproduct", addProduct);

// Get Product
router.get("/getproduct", getProduct);

//Get single product detail
router.get("/getsingleproduct/:id", getSingleProduct);

// update product detail
router.put("/update/:id", updateProduct);

// delete product
router.delete("/delete/:id", deleteProduct);

export default router;
