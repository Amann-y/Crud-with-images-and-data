import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Imgupload = () => {
  const navigate = useNavigate();

  const [img, setImg] = useState("");

  const imgdata = (e) => {
    setImg(e.target.files[0]);
  };

  const iupload = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("photo", img);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const result = await axios.post(
      "http://localhost:3000/image/upload",
      formdata,
      config
    );

    if (result) {
      navigate("/img");
    } else {
      alert("Image not added");
    }
  };

  return (
    <>
      <div className="container">
        <form>
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

          <button type="submit" className="btn btn-primary" onClick={iupload}>
            Upload
          </button>
        </form>
      </div>
    </>
  );
};

export default Imgupload;
