import React from "react";
import Joi from "joi";
import Form from "./common/Form";
import auth from "../services/authService";
import { Redirect } from "react-router-dom";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = Joi.object({
    // här deklarerar jag Joi schema.
    username: Joi.string().required().min(2).label("Username"), // fluent API
    password: Joi.string().required().min(4).label("Password"), // username och password har en context.key som ligger i detail objektet.
  });

  doSubmit = async () => {
    try {
      await auth.login(this.state.data);
      const { state } = this.props.location;
      window.location = state ? state.from : "/";
    } catch (error) {
      if (error.response.status === 400) {
        const errors = { username: error.response.data };
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("username", "Username")}
        {this.renderInput("password", "Password")}
        {this.renderbutton("Log in")}
      </form>
    );
  }
}

export default LoginForm;
