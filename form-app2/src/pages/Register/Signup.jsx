import React, { Component } from "react";
import * as yup from "yup";

import logoImg from "../../img/logo.png";
import group from "../../img/Group.png";
import comma1 from "../../img/comma1.png";
import Vector1 from "../../img/Vector1.png";
import arrowBack from "../../img/arrow_back.jpg";
import icon from "../../img/flat-color-icons_google.jpg";
import Logo from "../../components/Logo/Logo";

import Button from "../../components/button/Button";
import Content from "../../components/content/Content";

import "./Signup.css";
import { Link } from 'react-router-dom';


const defaults = {
  email: "",
  password: "",
  repeatPassword: "",
  checked: false,
  errors: {},
};

const regularExpression = /(?=[A-Za-z])/;

const schema = yup.object().shape({
  email: yup.string().email("Email is invalid").required("Email is Required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(regularExpression, "Password week")
    .required("Password is required"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password Not same")
    .required("Confirm Password is Required"),
  checked: yup.boolean().oneOf([true],"Check Box is Required ").required(""),
});

export default class Register extends Component {
  state = {
    email: "",
    password: "",
    repeatPassword: "",
    checked: false,
    errors: {},
  };

 

  handelInput = (e) => {
    const { id, value } = e.target;

    this.setState({ [id]: value });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    const { email, password, repeatPassword, checked  } = this.state;

    schema
      .validate(
        { email, password, repeatPassword, checked },
        { abortEarly: false }
      )
      .then(() => {
        console.log("valid");
        this.setState((prevState) => ({ ...defaults }));
        console.log("Valid")
      })
      .catch((errors) => {
        const formattedErrors = {};
        errors.inner.forEach((error) => {
          formattedErrors[error.path] = error.message;
        });
        this.setState({ errors: formattedErrors });
      });
  };
  render(props) {
    return (
      <div className="register">
        <div className="leftSide">
          <Logo src={logoImg} />

          <div className="img-flex">
            <img src={group} alt="" />
          </div>

          <Content
            comma={comma1}
            body=" I always observe the people who pass by when I ride an escalator.
              I'll never see most of them again, so I imagine a lot of things
              about their lives... about the day ahead of them."
            h4="Hideo Kojima"
            imgFlex={Vector1}
            classNameColor="white"
          />
        </div>
        <div className="form-section">
          <div className="arrow-back">
            <div>
              <img src={arrowBack} alt="" />
            </div>
            <div>
              <button type="button">
              <Link to="/">Back</Link>
                
                
              </button>
            </div>
          </div>
          <div className="heading-form">
            <h1>Register Individual Account!</h1>
            <p>
              For the purpose of gamers regulation, your details are required.
            </p>

            <form className="form" onSubmit={this.handelSubmit}>
              <label htmlFor="email">Email address*</label>
              <input
                id="email"
                placeholder="Enter email address"
                name="email"
                type="email"
                onChange={(e) => this.handelInput(e)}
                value={this.state.email}
              />
              {this.state.errors.email && (
                
                <p className="errors">{this.state.errors.email}</p>
              )}

              <label htmlFor="password">Create password*</label>
              <input
                id="password"
                placeholder="password"
                name="password"
                type="password"
                onChange={(e) => this.handelInput(e)}
                value={this.state.password}
              />
              {this.state.errors.password && (
                <p className="errors">{this.state.errors.password}</p>
              )}

              <label htmlFor="repeatPassword">Repeat password*</label>
              <input
                placeholder="Repeat password"
                id="repeatPassword"
                name="password"
                type="password"
                onChange={(e) => this.handelInput(e)}
                value={this.state.repeatPassword}
              />
              {this.state.errors.repeatPassword && (
                <p className="errors">{this.state.errors.repeatPassword}</p>
              )}
              <label htmlFor="checkbox">
                <input
                  type="checkbox"
                  id="checkbox"
                  onChange={(event) => {
                    this.setState({ checked: event.target.checked });
                  }}
                  checked={this.state.checked}
                />
                I agree to terms & conditions
              </label>
              {this.state.errors.checked && (
                <p className="errors">{this.state.errors.checked}</p>
              )}

              <Button type="submit" style="buttonF">
                Register Account
              </Button>
              <p className="or">Or</p>
              <Button type="button" style="buttonS">
                <img src={icon} alt="" />
                login
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
