import mongoose from "mongoose";

const imgSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
});

const Userimage = mongoose.model("image", imgSchema);

export default Userimage;
