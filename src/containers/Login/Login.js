import React from "react";
import Joi from 'joi-browser';
import Form from "../../Components/Form/Form";
import classes from "./LoginSignup.module.css";

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };


  handleLoginSubmit = event => {
    event.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    //Call the server
    this.props.history.replace("/");

  };

  render() {

    return (
      <div className={classes.LoginContainer}>
        <form className ={classes.LoginData} onSubmit={this.handleLoginSubmit}>
          <h2>Login</h2>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
          {this.renderButton("Signup")}
        </form>
      </div>
    );
  }
}

export default Login;