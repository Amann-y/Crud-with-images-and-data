import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.password) {
      setError(true);
      return false;
    }
    const result = await axios.post("http://localhost:3000/data/signup", {
      name: data.name,
      password: data.password,
      email: data.email,
    });
    setData({
      name: "",
      password: "",
      email: "",
    });
    setError(false);
    localStorage.setItem("user", JSON.stringify(result.data));
    navigate("/");
  };

  useEffect(() => {
    const check = JSON.parse(localStorage.getItem("user"));
    if (check) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="container mt-2">
        <h1>Sign_Up</h1>
        <form>
          <div className="mb-3">
            <label for="exampleInputName1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName1"
              aria-describedby="emailHelp"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              required
            />
            {error && !data.name && (
              <label className="text-danger">Enter Your Name</label>
            )}
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required
            />
            {error && !data.email && (
              <label className="text-danger">Enter Your Email</label>
            )}
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              required
            />
            {error && !data.password && (
              <label className="text-danger">Enter Your Password</label>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Sign-Up
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
