import React, { Component } from "react";

class FoodForm extends Component {
  handleSave = () => {
    // Navigera till Foods
  };

  render() {
    console.log(this.props.match.params);
    return (
      <div>
        <h1>Food Form - {this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>save</button>
      </div>
    );
  }
}

export default FoodForm;
