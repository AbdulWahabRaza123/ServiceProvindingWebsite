import React, { useState } from "react";
const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const inputEvent = (event) => {
    let { name, value } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const formData = (event) => {
    event.preventDefault();
    alert(
      `Name is ${data.name}, Email is ${data.email}, Message is ${data.message}`
    );
  };
  return (
    <>
      <div className="container">
        <div className="text-center mt-3">
          <h1>Contact Us</h1>
        </div>
        <div className="mt-2">
          <form className="set-form" onSubmit={formData}>
            <div className="mb-3">
              <label className="form-label">Enter Name</label>
              <input
                name="name"
                value={data.name}
                onChange={inputEvent}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={inputEvent}
                className="form-control"
                id="exampleInputEmail1"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Message:</label>
              <textarea
                name="message"
                value={data.message}
                onChange={inputEvent}
                type="textarea"
                className="form-control"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-outline-danger">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
