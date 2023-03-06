import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      setError(true);
      return false;
    }
    const result = await axios.post("http://localhost:3000/data/login", {
      email: data.email,
      password: data.password,
    });
    setData({
      password: "",
      email: "",
    });

    setError(false);
    localStorage.setItem("user", JSON.stringify(result.data));
    navigate("/");
  };

  useEffect(() => {
    // localStorage.removeItem("user");
    const check = JSON.parse(localStorage.getItem("user"));
    if (check) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <div className="container mt-2">
        <h1>Login</h1>
        <form>
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
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
