import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditCard = () => {
  const [inputs, setInputs] = useState(" ");
  const [datas, setDatas] = useState(" ");
  const location = useLocation();
  // console.log(location.state);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        access_token: token,
      },
    };
    axios
      .get(
        `https://bootcamp-rent-cars.herokuapp.com/admin/car/${location.state}`,
        config
      )
      .then((res) => {
        setDatas(res.data);
      });
  }, []);
  console.log(datas);
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

    console.log(inputs);
    axios
      .put(
        `https://bootcamp-rent-cars.herokuapp.com/admin/car/${datas.id}`,
        formData,
        config
      )
      .then(navigate("/discovery"));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Nama mobil:
          <input
            type="text"
            name="namaMobil"
            value={inputs.namaMobil || datas.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Kategori:
          <input
            type="text"
            name="kategori"
            value={inputs.kategori || datas.category}
            onChange={handleChange}
          />
        </label>
        <label>
          upload gambar:
          <input
            type="file"
            name="image"
            value={inputs.image}
            onChange={handleChange}
          />
        </label>
        <label>
          Harga:
          <input
            type="number"
            name="price"
            value={inputs.price || datas.price}
            onChange={handleChange}
          />
        </label>
        <button>cancel</button>
        <input type="submit" />
      </form>
    </>
  );
};
export default EditCard;
