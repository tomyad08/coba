import axios from "axios";
import React, { useState } from "react";
import { API } from "../const/endpoint";
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
      .post(API.REGISTER, payload)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <Navigation />
      <h1>Register</h1>
      <input type="email" onChange={handleEmail} placeholder="email" />
      <input type="password" onChange={handlePassword} placeholder="password" />
      <button onClick={handleRegis} className="btn btn-primary">
        Register
      </button>
      <p>
        Silahkan isi data kamu seperti email dan password. Data yang kamu
        submit, akan tersimpan di API.
      </p>
    </>
  );
};
export default Register;
