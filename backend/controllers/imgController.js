import Userimage from "../models/imgmodel.js";

const addimage = async (req, res) => {
  try {
    const { filename } = req.file;
    const imguser = new Userimage({ img: filename });
    const saveimage = await imguser.save();
    res.send(saveimage);
  } catch (error) {
    console.log(error);
  }
};

const getimages = async (req, res) => {
  try {
    const userimages = await Userimage.find({});
    res.send(userimages);
  } catch (error) {
    console.log(error);
  }
};

const updateimage = async (req, res) => {
  try {
    const { id } = req.params;
    const { filename } = req.file;
    const update = await Userimage.findByIdAndUpdate(
      { _id: id },
      { img: filename },
      { new: true }
    );
    res.send(update);
  } catch (error) {
    console.log(error);
  }
};

const deleteimage = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedata = await Userimage.findOneAndDelete({ _id: id });
    res.send(deletedata);
  } catch (error) {
    console.log(error);
  }
};

export { addimage, getimages, updateimage, deleteimage };
