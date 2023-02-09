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
    <>
      <Navigation />
      {isLogin ? (
        <div>
          <button onClick={handleLogout} className="btn btn-danger mt-3 mx-2">
            Log Out
          </button>
          <p>Silahkan Log Out</p>
        </div>
      ) : (
        <>
          <h1>Log In</h1>
          <input type="email" onChange={handleEmail} placeholder="email" />
          <input
            type="password"
            onChange={handlePassword}
            placeholder="password"
          />
          <button onClick={handleRegis} className="btn btn-success mx-2">
            {" "}
            LogIn
          </button>
          <p>
            Silahkan cantumkan email dan password kamu. Isi data kamu sesuai
            data yang kamu daftarkan di halaman register.
          </p>
        </>
      )}
    </>
  );
};
export default LogIn;
