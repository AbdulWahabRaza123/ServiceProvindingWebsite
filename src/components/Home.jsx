import React from "react";
import coding from "../images/coding.svg";
import ComCode from "./ComCode";
const Home = () => {
  return (
    <>
      <ComCode
        name=" Welcome to our platform"
        imgSrc={coding}
        btnName="Approach Us !"
        path="/services"
      />
    </>
  );
};
export default Home;
