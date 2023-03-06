import express from "express";
import {
  getUserDetail,
  signupUserDetail,
  loginUserDetail,
} from "../controllers/userController.js";

const router = express.Router();

//User Routes
router.get("/get", getUserDetail);
router.post("/signup", signupUserDetail);
router.post("/login", loginUserDetail);

//Product Routes

export default router;
