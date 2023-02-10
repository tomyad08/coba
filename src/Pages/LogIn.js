import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../const/endpoint";
import Navigation from "../Navigation";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleRegis = () => {
    const payload = {
      email: email,
      password: password,
    };
    axios
      .post(API.LOGIN, payload)
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
        navigate("/discovery");
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div style={{ width: "350px" }}>
      {isLogin ? (
        <div>
          <button onClick={handleLogout} className="btn btn-danger mt-3 mx-2">
            Log Out
          </button>
          <p>Silahkan Log Out</p>
        </div>
      ) : (
        <>
          <div>
            <h2 className="text-center">Log In</h2>
            <input
              type="email"
              onChange={handleEmail}
              placeholder="email"
              className="mb-2 mx-2 border border-2 rounded"
              style={{ width: "90%", height: "40px", fontSize: " 20px" }}
            />
            <br />
            <input
              type="password"
              onChange={handlePassword}
              placeholder="password"
              className="mx-2 border border-2 rounded"
              style={{ width: "90%", height: "40px", fontSize: " 20px" }}
            />
            <br />
            <button
              onClick={handleRegis}
              className="btn btn-success my-3 px-auto"
              style={{ width: "30%", fontSize: "20px", marginLeft: "110px" }}
            >
              LogIn
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default LogIn;
