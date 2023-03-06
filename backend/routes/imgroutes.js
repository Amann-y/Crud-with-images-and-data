import express from "express";
import {
  addimage,
  getimages,
  updateimage,
  deleteimage,
} from "../controllers/imgController.js";
import multer from "multer";

const router = express.Router();

const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, `image-${Date.now()}.${file.originalname}`);
  },
});

const isimage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("images allowed only"));
  }
};

const upload = multer({
  storage: imgconfig,
  fileFilter: isimage,
});

// create route
router.post("/upload", upload.single("photo"), addimage);

// read route
router.get("/images", getimages);

// update route
router.put("/upload/:id", upload.single("photo"), updateimage);

// delete route
router.delete("/delete/:id", deleteimage);

export default router;
