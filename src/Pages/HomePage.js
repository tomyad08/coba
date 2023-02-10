import React from "react";
import Navigation from "../Navigation";
import LogIn from "./LogIn";
import Register from "./Register";

const HomePage = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "600px",
          overflow: "hidden",
          position: "absolute",
        }}
      >
        <Navigation />
        <img
          src="./assets/gambarHomePage.jpg"
          alt=" "
          style={{ width: "100%" }}
        />
        <div
          style={{
            position: "relative",
            zIndex: "2",
            top: "-700px",
            backgroundColor: "white",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <div className="d-flex justify-content-around">
            <div>
              <Register />
            </div>
            <div>
              <LogIn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
