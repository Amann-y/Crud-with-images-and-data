import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Images = () => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const res = await axios.get("http://localhost:3000/image/images");
    setImages(res.data);
  };

  useEffect(() => {
    getImages();
  }, []);

  const deleteimg = async (id) => {
    const result = await axios.delete(
      `http://localhost:3000/image/delete/${id}`
    );
    if (result) {
      getImages();
    } else {
      alert("Image not deleted");
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          {images.map((ele, ind) => {
            return (
              <div className="col-md-4 flex " key={ind}>
                <img
                  src={`http://localhost:3000/uploads/${ele.img}`}
                  className="img-fluid text-center"
                />
                <Link to={"/image/update/" + ele._id}>
                  <button className="btn bg-success m-2">Update</button>
                </Link>

                <button
                  className="btn bg-danger"
                  onClick={() => deleteimg(ele._id)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Images;
