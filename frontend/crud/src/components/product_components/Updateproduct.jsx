import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Updateproduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    price: "",
    category: "",
    company: "",
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async (e) => {
    const result = await axios.get(
      `http://localhost:3000/product/getsingleproduct/${params.id}`
    );
    setData({
      name: result.data.name,
      price: result.data.price,
      category: result.data.category,
      company: result.data.company,
    });

    setError(false);
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    if (!data.name || !data.price || !data.category || !data.company) {
      setError(true);
      return false;
    }

    const result = await axios.put(
      `http://localhost:3000/product/update/${params.id}`,
      {
        name: data.name,
        price: data.price,
        category: data.category,
        company: data.company,
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
        <h2>Update Product</h2>
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
            onClick={updateProduct}
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default Updateproduct;
