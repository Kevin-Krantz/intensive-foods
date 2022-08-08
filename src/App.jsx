import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Foods from "./components/Foods";
import LoginForm from "./components/LoginForm";
import NavBar from ".NavBar";
import Customers from "./components/Customers";
import Orders from "./components/Orders";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/foods" component={Foods} />
          <Redirect to="/foods" />
        </Switch>
      </div>
    );
  }
}

export default App;
