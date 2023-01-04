import React, { Component } from "react";
import logo2 from "../../img/gg.png";
import comma2 from "../../img/comma2.png";
import joystick_trans from "../../img/joystick_trans.png";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/button/Button";

import img1 from "../../img/flat-color-icons_google.jpg";
import img2 from "../../img/img2.png";
import img3 from "../../img/img3.png";
import img4 from "../../img/img4.png";

import Content from "../../components/content/Content";
import "../Register/Signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import * as yup from "yup";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const schema = yup.object().shape({
    email: yup.string().email("Email is invalid").required("Email is Required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handelInput = (e) => {
    const { value, id } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    schema
      .validate({ email, password }, { abortEarly: false })
      .then(() => {
        navigate("/Game");
      })
      .catch((errors) => {
        const formattedErrors = {};
        errors.inner.forEach((error) => {
          formattedErrors[error.path] = error.message;
        });
        setErrors(formattedErrors);
      });
  };
  return (
    <div className="register">
      <div className="login">
        <Logo src={logo2} />
        <Content
          comma={comma2}
          body=" I always observe the people who pass by when I ride an escalator.
              I'll never see most of them again, so I imagine a lot of things
              about their lives... about the day ahead of them."
          h4="Hideo Kojima"
          imgFlex={joystick_trans}
          classNameColor="residential"
        />
      </div>
      <div className="form-section-login">
        <div className="headingForm">
          <h1>Join the game!</h1>
          <p>Go inside the best gamers social network!</p>
        </div>

        <ul className="img">
          <li>
            <img src={img1} alt="" />
          </li>
          <li>
            <img src={img2} alt="" />
          </li>
          <li>
            <img src={img3} alt="" />
          </li>
          <li>
            <img src={img4} alt="" />
          </li>
        </ul>
        <form className="form" onSubmit={(e) => handelSubmit(e)}>
          <label>Your email</label>
          <input
            id="email"
            placeholder="Enter email address"
            name="email"
            type="email"
            onChange={(e) => handelInput(e)}
            value={formData.email}
          />
          {errors.email && <p className="errors">{errors.email}</p>}

          <label>Enter your password</label>
          <input
            id="password"
            placeholder="password"
            name="password"
            type="password"
            onChange={(e) => handelInput(e)}
            value={formData.password}
          />
          {errors.password && <p className="errors">{errors.password}</p>}

          <Button type="submit" style="buttonF">
            Login
          </Button>
        </form>
        <p className="question">
          Don’t have an account?{" "}
          <button type="button">
            <Link to="/Signup">Register</Link>
          </button>
        </p>
      </div>
    </div>
  );
}
