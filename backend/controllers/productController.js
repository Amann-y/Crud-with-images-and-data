import Product from "../models/productmodel.js";

const addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const productsave = await product.save();
    res.send(productsave);
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await Product.find({});
    res.send(product);
  } catch (error) {
    console.log(error);
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById({ _id: id });
    res.send(product);
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send(product);
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete({ _id: id });
    res.send(product);
  } catch (error) {
    console.log(error);
  }
};

export {
  addProduct,
  getProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
