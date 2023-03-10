import axios from "axios";
import React, { useState } from "react";
import { REACT_APP_API } from "../const/endpoint";
import Navigation from "../Navigation";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      role: "Admin",
    };
    axios
      .post(REACT_APP_API.REGISTER, payload)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));

    alert("Register Success");
  };

  return (
    <div style={{ width: "350px" }}>
      <h2 className="text-center">Register</h2>
      <input
        type="email"
        onChange={handleEmail}
        placeholder="email"
        className="mb-2 border border-2 rounded-2"
        style={{ width: "90%", height: "40px", fontSize: " 20px" }}
      />
      <br />
      <input
        type="password"
        onChange={handlePassword}
        placeholder="password"
        style={{ width: "90%", height: "40px", fontSize: " 20px" }}
        className="border border-2 rounded-2"
      />
      <br />
      <button
        onClick={handleRegis}
        className="btn btn-primary my-3 px-auto "
        style={{ width: "30%", fontSize: "20px", marginLeft: "110px" }}
      >
        Register
      </button>
      <p className="text-center">*Minimal password 6 karakter</p>
    </div>
  );
};
export default Register;
