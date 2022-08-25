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
import { ToastContainer } from "react-toastify";
import Logout from "./components/Logout";
import auth from "./services/authService";
import ProtectedRoute from "./components/common/ProtectedRoute";

class App extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.setState({ user: auth.getCurrentUser() });
  }

  render() {
    const { user } = this.state;
    return (
      <>
        <NavBar user={user} />
        <div className="container">
          <ToastContainer />
          <Switch>
            <ProtectedRoute path="/foods/:id" component={FoodForm} />
            <Route
              path="/foods"
              render={(props) => <Foods {...props} user={user} />}
            />
            <Route path="/not-found" component={NotFound} />
            <Route path="/orders" component={Orders} />
            <Route path="/customers" component={Customers} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/logout" component={Logout} />
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
