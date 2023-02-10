import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div
      className="d-flex justify-content-around"
      style={{ backgroundColor: "purple", color: "white" }}
    >
      <div className="py-4">
        <Link to="/">
          <h4
            style={{ textDecoration: "none", color: "white", fontSize: "30px" }}
          >
            Home
          </h4>
        </Link>
      </div>
      <div>
        <Link to="/discovery">
          <h4
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "30px",
              paddingTop: "22px",
            }}
          >
            Discovery
          </h4>
        </Link>
      </div>
    </div>
  );
};
export default Navigation;
