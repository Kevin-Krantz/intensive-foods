import React, { Component } from "react";
import _ from "lodash";
import Input from "./common/Input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  validate() {
    const errors = {};
    const { username, password } = this.state.account;

    if (username === "") {
      errors.username = "Username cannot be emty";
    }

    if (password === "") {
      errors.password = "Password is required";
    }

    return errors;
  }

  validateProperty() {}

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors });
    if (!_.isEmpty(errors)) return;

    console.log("LOGGA IN");
  };

  handleChange = ({ target: input }) => {
    const account = { ...this.state.account };
    account[input.id] = input.value;
    this.setState({ account });
  };

  render() {
    const { account, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          name={"username"}
          label={"Username"}
          value={account.username}
          error={errors.username}
          onChange={this.handleChange}
        />
        <Input
          name="password"
          label="Password"
          value={account.password}
          error={errors.password}
          onChange={this.handleChange}
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default LoginForm;
