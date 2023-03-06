import express from "express";
import cors from "cors";
import multer from "multer";
import connectdb from "./DB/connectdb.js";
import userRouter from "./routes/userroutes.js";
import productRouter from "./routes/productroutes.js";
import imgRouter from "./routes/imgroutes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("./uploads"));
const port = 3000;

connectdb("mongodb://127.0.0.1:27017");

// const imgconfig = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "./uploads");
//   },
//   filename: (req, file, callback) => {
//     callback(null, `image-${Date.now()}.${file.originalname}`);
//   },
// });

// const isimage = (req, file, callback) => {
//   if (file.mimetype.startsWith("image")) {
//     callback(null, true);
//   } else {
//     callback(new Error("images allowed only"));
//   }
// };

// const upload = multer({
//   storage: imgconfig,
//   fileFilter: isimage,
// });

app.use("/data", userRouter);
app.use("/product", productRouter);
app.use("/image", imgRouter);

app.listen(port, () => {
  console.log("Server is Running");
});
