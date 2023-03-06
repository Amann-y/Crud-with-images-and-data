import User from "../models/usermodel.js";

const getUserDetail = async (req, res) => {
  try {
    res.send("Get Details");
  } catch (error) {
    console.log(error);
  }
};

const signupUserDetail = async (req, res) => {
  try {
    const data = req.body;
    const user = await new User(data);
    const userSave = await user.save();
    res.send(userSave);
  } catch (error) {
    console.log(error);
  }
};

const loginUserDetail = async (req, res) => {
  try {
    const user = await User.find({ email: req.body.email });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};

export { getUserDetail, signupUserDetail, loginUserDetail };
