import React, { Component } from "react";
import { getFood } from "../services/fakeFoodService";

class FoodForm extends Component {
  handleSave = () => {
    this.props.history.push("/");
  };

  componentDidMount() {
    const foodId = getFood(this.props.match.params.id);
    console.log(foodId);
    if (!foodId) return this.props.history.push("/not-found");
  }

  render() {
    return (
      <div>
        <h1> Food Form {this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>save</button>
      </div>
    );
  }
}

export default FoodForm;
