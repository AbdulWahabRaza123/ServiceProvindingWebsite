import React from "react";
import Card from "./Card";
import SData from "./SData";
const Services = () => {
  return (
    <>
      <div className="container container-fluid">
        <div className="text-center">
          <h1>Services</h1>
        </div>
        <div className="place-card">
          <div className="row">
            {SData.map((val, index) => {
              return (
                <>
                  <Card
                    key={index}
                    title={val.title}
                    tagline={val.tagline}
                    imgSrc={val.imgSrc}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
