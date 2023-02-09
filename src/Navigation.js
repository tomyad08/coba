import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="row" style={{ backgroundColor: "purple", color: "white" }}>
      <div className="col">
        <Link to="/">
          <h4 style={{ textDecoration: "none", color: "white" }}>Home</h4>
        </Link>
      </div>
      <div className="col">
        <Link to="/discovery">
          <h4 style={{ textDecoration: "none", color: "white" }}>Discovery</h4>
        </Link>
      </div>
      <div className="col">
        <Link to="/login">
          <h4 style={{ textDecoration: "none", color: "white" }}>LogIn</h4>
        </Link>
      </div>
      <div className="col">
        <Link to="/register">
          <h4 style={{ textDecoration: "none", color: "white" }}>Register</h4>
        </Link>
      </div>
    </div>
  );
};
export default Navigation;
