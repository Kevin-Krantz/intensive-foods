import React from "react";
import Joi from "joi";
import Form from "./common/Form";

class RegisterForm extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {},
  };

  schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .label("Email"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().min(0).label("Name"),
  });

  doSubmit = () => {
    console.log("LOGGA IN");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("email", "Email")}
        {this.renderInput("password", "Password")}
        {this.renderInput("name", "Name")}
        {this.renderbutton("Log in")}
      </form>
    );
  }
}

export default RegisterForm;
