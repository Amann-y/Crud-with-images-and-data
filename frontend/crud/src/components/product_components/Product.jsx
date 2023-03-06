import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  const Products = async () => {
    const result = await axios.get("http://localhost:3000/product/getproduct");
    setProduct(result.data);
  };
  useEffect(() => {
    Products();
  }, []);

  const handleDelete = async (id) => {
    const result = await axios.delete(
      `http://localhost:3000/product/delete/${id}`
    );
    if (result) {
      Products();
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {product.map((ele, ind) => {
            return (
              <div className="col-md-4 mt-3" key={ind}>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{ele.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{ele.price}</h6>
                    <p class="card-text">{ele.category}</p>
                    <h6>{ele.company}</h6>
                    <div className="flex justify-content-between d-flex">
                      <Link to={"/product/getsingleproduct/" + ele._id}>
                        <button className="btn btn-warning">Update</button>
                      </Link>
                      <Link to={"/product/delete/" + ele._id}>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(ele._id)}
                        >
                          Delete
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
