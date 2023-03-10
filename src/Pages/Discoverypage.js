import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { REACT_APP_API } from "../const/endpoint";
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
      .get(REACT_APP_API.GET_CARS, config)
      .then((res) => {
        setCars(res.data.cars);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        access_token: token,
      },
    };
    axios.delete(REACT_APP_API.POST_CARS + `/${id}`, config);
  };

  const handleEdit = (id) => {
    navigate("/edit", {
      state: id,
    });
  };
  return (
    <div className="container-fluid">
      <Navigation />
      <div className="d-flex justify-content-center">
        <div>
          <Link to="/newCar">
            <button className="btn btn-primary my-5 px-5 py-2">
              Add NewCar
            </button>
          </Link>
        </div>
      </div>
      <div className="row gap-5">
        {cars.map((value) => (
          <>
            <div
              key={value.id}
              className="col-md-3 border border-2 rounded-2 container"
            >
              <div
                style={{ width: "100%", height: "180px", overflow: "hidden" }}
              >
                <img
                  src={value.image}
                  alt=" "
                  style={{
                    width: "100%",
                    marginTop: "20px",
                  }}
                />
              </div>
              <p>{value.name}</p>
              <p>{value.price}</p>
              <p>{value.category}</p>
              <div className="pb-2">
                <button
                  onClick={() => handleDelete(value.id)}
                  className="btn btn-danger"
                  style={{ width: "50%" }}
                >
                  delete
                </button>
                <button
                  onClick={() => handleEdit(value.id)}
                  className="btn btn-primary"
                  style={{ width: "50%" }}
                >
                  Edit
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
export default DiscoveryPage;
