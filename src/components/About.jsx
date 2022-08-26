import React from "react";
import coding from "../images/coding.svg";
import ComCode from "./ComCode";
const About = () => {
  return (
    <>
      <ComCode
        name=" Contact to our Team"
        imgSrc={coding}
        btnName="Contact Us !"
        path="/contact"
      />
    </>
  );
};
export default About;
