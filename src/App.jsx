import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Foods from "./components/Foods";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import Customers from "./components/Customers";
import Orders from "./components/Orders";
import NotFound from "./components/NotFound";
import RegisterForm from "./components/RegisterForm";
import FoodForm from "./components/FoodForm";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/foods/:id" component={FoodForm} />
            <Route path="/foods" component={Foods} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/orders" component={Orders} />
            <Route path="/customers" component={Customers} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Redirect exact from="/" to="/foods" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
