import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const EditCard = () => {
  const location = useLocation();
  console.log(location.state);
  const [inputs, setInputs] = useState(" ");
  const [datas, setDatas] = useState(" ");

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
        console.log(datas);
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
    formData.append("category", inputs.kategori);
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
      <div
        style={{
          background: "radial-gradient(black, purple)",
          paddingTop: "20px",
          paddingBottom: "145px",
        }}
      >
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "8%" }}
        >
          <div
            className="border border-2 rounded-2 p-3"
            style={{ width: "30%", backgroundColor: "white" }}
          >
            <form onSubmit={handleSubmit}>
              <h1 className="text-center">Edit</h1>
              <input
                type="text"
                name="namaMobil"
                value={inputs.namaMobil || ""}
                onChange={handleChange}
                placeholder="Nama Mobil"
                style={{ width: "100%", marginBottom: "10px" }}
                className="border border-2 rounded-1 p-2"
              />

              <br />

              <select
                type="select"
                name="kategori"
                onChange={handleChange}
                style={{ width: "100%", marginBottom: "10px" }}
                className="border border-2 rounded-1 p-2"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>

              <br />

              <input
                type="number"
                name="price"
                value={inputs.price || ""}
                onChange={handleChange}
                placeholder="Harga"
                style={{ width: "100%", marginBottom: "10px" }}
                className="border border-2 rounded-1 p-2"
              />

              <br />
              <input
                type="file"
                name="image"
                value={inputs.image || ""}
                onChange={handleChange}
                placeholder="Picture"
                style={{ width: "100%", marginBottom: "10px" }}
              />

              <br />
              <Link to="/discovery">
                <button
                  className="btn btn-danger"
                  style={{ width: "100%", marginBottom: "10px" }}
                >
                  cancel
                </button>
              </Link>
              <input
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", marginBottom: "10px" }}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditCard;
