import React from "react";
import { NavLink } from "react-router-dom";
const Card = (props) => {
  return (
    <>
      <div className="col-md-4 mt-4">
        <div className="card">
          <img
            src={props.imgSrc}
            className="card-img-top img-responsive"
            alt="Services"
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.tagline}</p>
            <NavLink
              exact
              activeClassName="active"
              to="/contact"
              className="btn btn-danger"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
