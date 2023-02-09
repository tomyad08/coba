import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../const/endpoint";
import Navigation from "../Navigation";

const DiscoveryPage = () => {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        access_token: token,
      },
    };
    axios
      .get(API.GET_CARS, config)
      .then((res) => {
        setCars(res.data.cars);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(cars);

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        access_token: token,
      },
    };
    axios.delete(API.POST_CARS + `/${id}`, config);
  };

  const handleEdit = (id) => {
    navigate("/edit", {
      state: id,
    });
  };
  return (
    <>
      <Navigation />
      <h1>Discovery</h1>
      <Link to="/newCar">
        <button className="btn btn-primary my-5 mx-5">Add New Car</button>
      </Link>
      <div className="row" style={{ width: "95%", margin: "0 auto" }}>
        {cars.map((value) => (
          <>
            <div key={value.id} className="col-md-3">
              <img src={value.image} alt=" " style={{ width: "30%" }} />
              <p>{value.name}</p>
              <button
                onClick={() => handleDelete(value.id)}
                className="btn btn-danger"
              >
                delete
              </button>
              <button
                onClick={() => handleEdit(value.id)}
                className="btn btn-primary"
              >
                Edit
              </button>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default DiscoveryPage;
