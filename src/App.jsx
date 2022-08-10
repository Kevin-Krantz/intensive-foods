import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Foods from "./components/Foods";
import LoginForm from "./components/LoginForm";
import NavBar from "./NavBar";
import Customers from "./components/Customers";
import Orders from "./components/Orders";
import FoodForm from "./components/FoodForm";
import NotFound from "./components/NotFound";
import RegisterForm from "./components/RegisterForm";

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/customers" component={Customers} />
          <Route path="/orders" component={Orders} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/:id" component={FoodForm} />
          <Route path="/" exact component={Foods} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
