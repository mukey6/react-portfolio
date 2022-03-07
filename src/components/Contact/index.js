import React, { useState } from "react";
import { validateEmail } from "../../assets/utils/helpers";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");
  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    // setFormState({...formState, name: e.target.value })
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    // find out tge why spread was used here??
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };
  return (
    <section>
    <h1 data-testid="h1tag">Contact me</h1>
    <form className="col w-100 p-3 d-flex flex-column align-items-center" onSubmit={handleSubmit}>
      <div className="mb-3">
      <label className="form-label text-white"> Name:</label>
        <input
          type="text"
          className="form-control"
          // placeholder="John Doe"
          defaultValue={name}
          onBlur={handleChange}
          name="name"
        />
      </div>
      <div className="mb-3">
 <label className="form-label text-white">Email address</label>
        <input
          type="email"
          className="form-control"
          // placeholder="name@example.com"
          defaultValue={email}
          name="email"
          onBlur={handleChange}
        />
      </div>
      <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label text-white">
 {" "}
 Message
 </label>
        <textarea
          name="message"
          className="form-control"
          defaultValue={message}
          onBlur={handleChange}
          rows="5"
        />
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>

      <button data-testid="button" type="submit">Submit</button>
    </form>
  </section>
  );
};

export default Contact;

    // <div id="contact">
    //   <h1> Contact Me</h1>
    //   <form className="col w-100 p-3 d-flex flex-column align-items-center">
    //     <div className="mb-3">
    //       <label className="form-label text-white"> Name:</label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         placeholder="John Doe"
    //       ></input>
    //     </div>
    //     <div className="mb-3">
    //       <label className="form-label text-white">Email address</label>
    //       <input
    //         type="email"
    //         className="form-control"
    //         placeholder="name@example.com"
    //       ></input>
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="exampleFormControlTextarea1" className="form-label text-white">
    //         {" "}
    //         Message
    //       </label>
    //       <textarea className="form-control" name="message" rows="3"></textarea>
    //     </div>
    //     <button type="submit">Submit</button>
    //   </form>
    // </div>
