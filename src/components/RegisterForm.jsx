import React from "react";
import _ from "lodash";
import Joi from "joi";
import Form from "./common/Form";

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

  doSubmit = () => {
    console.log("REGISTER");
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
