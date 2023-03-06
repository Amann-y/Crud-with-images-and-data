import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addproduct = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    price: "",
    category: "",
    company: "",
  });
  const [error, setError] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    if (!data.name || !data.price || !data.category || !data.company) {
      setError(true);
      return false;
    }
    const userid = JSON.parse(localStorage.getItem("user"))[0]._id;
    const result = await axios.post(
      "http://localhost:3000/product/addproduct",
      {
        name: data.name,
        price: data.price,
        category: data.category,
        company: data.company,
        userid: userid,
      }
    );
    setData({
      name: "",
      price: "",
      category: "",
      company: "",
    });

    setError(false);
    navigate("/");
  };
  return (
    <>
      <div className="container mt-2">
        <h2>Add Product</h2>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="type"
              class="form-control"
              id="exampleInputName1"
              aria-describedby="emailHelp"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            {error && !data.name && (
              <label className="text-danger">Enter Product Name</label>
            )}
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Price
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleInputNumber1"
              value={data.price}
              onChange={(e) => setData({ ...data, price: e.target.value })}
            />
            {error && !data.price && (
              <label className="text-danger">Enter Price</label>
            )}
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Category
            </label>
            <input
              type="type"
              class="form-control"
              id="exampleInputCategory1"
              aria-describedby="emailHelp"
              value={data.category}
              onChange={(e) => setData({ ...data, category: e.target.value })}
            />
            {error && !data.category && (
              <label className="text-danger">Enter Category</label>
            )}
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Company
            </label>
            <input
              type="type"
              class="form-control"
              id="exampleInputCompany1"
              aria-describedby="emailHelp"
              value={data.company}
              onChange={(e) => setData({ ...data, company: e.target.value })}
            />
            {error && !data.company && (
              <label className="text-danger">Enter Company</label>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default Addproduct;
