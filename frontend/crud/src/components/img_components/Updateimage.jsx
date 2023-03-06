import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Updateimage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [img, setImg] = useState("");

  const imgdata = (e) => {
    setImg(e.target.files[0]);
  };

  const updateimage = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("photo", img);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const result = await axios.put(
      `http://localhost:3000/image/upload/${params.id}`,
      formdata,
      config
    );
    if (result) {
      navigate("/img");
    } else {
      alert("Image not updated");
    }
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label for="exampleInputFile1" className="form-label">
            Choose an Image
          </label>
          <input
            type="file"
            className="form-control"
            id="exampleInputFile1"
            aria-describedby="emailHelp"
            name="photo"
            onChange={imgdata}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={updateimage}>
          Update Image
        </button>
      </div>
    </>
  );
};

export default Updateimage;
