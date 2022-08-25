import React from "react";
import Joi from "joi";
import Form from "./common/Form";
import user from "../services/userService";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = Joi.object({
    // här deklarerar jag Joi schema.
    username: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Username"), // fluent API
    password: Joi.string().required().min(5).label("Password"), // username och password har en context.key som ligger i detail objektet.
    name: Joi.string().min(0).label("Name"),
  });

  doSubmit = async () => {
    try {
      await user.register(this.state.data);
      window.location = "/";
    } catch (error) {
      if (error.response.status === 400) {
        console.log(error, "the error");
        const errors = { username: error.response.data };
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("username", "Username")}
        {this.renderInput("password", "Password", "password")}
        {this.renderInput("name", "Name")}
        {this.renderbutton("Register")}
      </form>
    );
  }
}

export default RegisterForm;
