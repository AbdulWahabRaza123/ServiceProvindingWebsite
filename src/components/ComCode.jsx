import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return (
    <>
      <section className="container container-fluid">
        <div className="place-header-text row mt-4 container-fluid">
          <div className="col-md-7 header-text container-fluid">
            <h1>
              {props.name}
              <br />
              <strong className="brand-name"> RaZa Dev</strong>
            </h1>
            <h2>
              We are new talented and
              <br /> emerging developers.
            </h2>
            <br />
            <NavLink
              exact
              activeClassName="active"
              className="header-button"
              to={props.path}
            >
              {props.btnName}
            </NavLink>
          </div>
          <div className="header-picture col-md-5 container-fluid mt-2">
            <img className="img-fluid" src={props.imgSrc} alt="Developers" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
