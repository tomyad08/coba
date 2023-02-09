import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../const/endpoint";

const NewCar = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState(" ");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        access_token: token,
      },
    };
    const formData = new FormData();
    formData.append("image", inputs.image);
    formData.append("name", inputs.namaMobil);
    formData.append("category", inputs.ketegori);
    formData.append("price", inputs.price);
    formData.append("status", false);

    axios
      .post(API.POST_CARS, formData, config)
      .then((res) => {
        console.log(res);
        navigate("/discovery");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nama mobil:
        <input
          type="text"
          name="namaMobil"
          value={inputs.namaMobil || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Kategori:
        <input
          type="text"
          name="kategori"
          value={inputs.kategori || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        upload gambar:
        <input
          type="file"
          name="image"
          value={inputs.image || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Harga:
        <input
          type="number"
          name="price"
          value={inputs.price || ""}
          onChange={handleChange}
        />
      </label>
      <button>cancel</button>
      <input type="submit" />
    </form>
  );
};
export default NewCar;
