import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Foods from "./components/Foods";
import LoginForm from "./components/LoginForm";
import NavBar from "./NavBar";
import Customers from "./components/Customers";
import Orders from "./components/Orders";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={(props, foods) => <Foods foods={foods} {...props} />}
          />
          <Route path="/customers" component={Customers} />
          <Route path="/orders" component={Orders} />
          <Route path="/login" component={LoginForm} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
