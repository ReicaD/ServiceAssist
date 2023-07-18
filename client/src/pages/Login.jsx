import React from "react";

import { useState } from "react";
import { toast } from "react-toastify";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const {  email, password } = formData;
  const onChange = (e) => {
    setFormData(() => ({
      //targeting the name & value that will be submitted
      [e.target.name]: e.target.value,
    }));

  
    };
    return (
      <>
        <section className="heading">
          <h1>
            <FaSignInAlt />
             Login
          </h1>
          <p>login Here</p>
        </section>
        <section className="form">
        <form > 
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="enter email here"
                required
              />
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  placeholder="Enter password here"
                  required
                />
              </div>
              <div className="form-group">
                <button className="btn btn-block">Submit</button>
              </div>
            </div>
          </form>
        </section>
      </>
    )
  };

export default Login;
