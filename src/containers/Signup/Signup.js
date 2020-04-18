import React from "react";
// import { Redirect } from "react-router-dom";
import Joi from 'joi-browser';
import Form from "../../Components/Form/Form";
import classes from "../Login/LoginSignup.module.css";

class Signup extends Form {
  state = {
    data: { name:"" , username: "", password: "" },
    errors: {}
  };

  schema = {
    name: Joi.string()
      .required()
      .label("Name"),
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    
    password: Joi.string()
      .required()
      .min(5)
      .label("Password")
  };


  handleSignupSubmit = event => {
    event.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    //Call the server
    this.props.history.replace("/Login");

  };


  render() {
    
    return (
      <div className={classes.SignupContainer}>
        <form className ={classes.SignupData} onSubmit={this.handleSignupSubmit}>
          <h2>Signup</h2>
          {this.renderInput("name", "Name")}
          {/* {this.renderInput("First Name", "First Name")}
          {this.renderInput("Last Name", "LastName")} */}
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          <div className={classes.Signup_btn}>
            {this.renderButton("Register")}
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;