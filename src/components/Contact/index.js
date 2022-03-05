import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <h1> Contact Me</h1>
      <form className="col w-100 p-3 d-flex flex-column align-items-center">
        <div className="mb-3">
          <label className="form-label text-white"> Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="John Doe"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label text-white">
            {" "}
            Message
          </label>
          <textarea className="form-control" name="message" rows="3"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
