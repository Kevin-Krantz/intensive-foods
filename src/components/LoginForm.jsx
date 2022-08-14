import React from "react";
import Joi from "joi";
import Form from "./common/Form";

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

  doSubmit = () => {
    console.log("LOGGA IN");
  };

  render() {
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
