import "./Signup.css"
import { useState } from "react";

/**
 * renders signup form
 *
 * props: signup()
 *
 * state: formData
 *
 * Signup -> SignupForm
 */

function SignupForm({ signup }) {

  const [formData, setFormData] = useState(
    {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
    }
  );

  /** Handle input to form. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  /** Call callback function on form submit. */
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log('signup formData', formData);
    signup(formData);
  }

  return (
    <form className="SignupForm">
      <input
        className="form-control"
        name="username"
        onChange={handleChange}
        placeholder="username"
      />
      <input
        className="form-control"
        name="password"
        onChange={handleChange}
        placeholder="password"
      />
      <input
        className="form-control"
        name="firstName"
        onChange={handleChange}
        placeholder="first name"
      />
      <input
        className="form-control"
        name="lastName"
        onChange={handleChange}
        placeholder="last name"
      />
      <input
        className="form-control"
        name="email"
        onChange={handleChange}
        placeholder="email"
      />
      <button className="btn-secondary btn" onClick={handleSubmit}>
        Signup
      </button>
    </form>
  );
}

export default SignupForm;