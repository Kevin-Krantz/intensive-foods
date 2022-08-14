import React from "react";
import Joi from "joi";
import Form from "./common/Form";
import { getCategories } from "../services/fakeCategoryService";

const DEFAULT_CATEGORY = { _id: "", name: "Select Category" };

class NewFoodForm extends Form {
  state = {
    data: { name: "", categoryId: "", numberInStock: "", price: "" },
    errors: {},
    categories: [],
    defaultCategory: DEFAULT_CATEGORY,
  };

  componentDidMount() {
    const categories = [DEFAULT_CATEGORY, ...getCategories()];
    this.state.categories = { DEFAULT_CATEGORY, ...categories };
    this.setState({ categories });
  }

  schema = Joi.object({
    name: Joi.string().required().min(2).label("Name"), // fluent API
    categoryId: Joi.string().required().label("Category"),
    numberInStock: Joi.string().required().min(0).label("Stock"), // name category number in stock price
    price: Joi.string().required().min(4).label("Price"),
  });

  doSubmit = () => {
    console.log("LOGGA IN");
  };

  render() {
    return (
      <div>
        <h1>Food Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderDropDown("categoryId", "Category", this.state.categories)}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("price", "Price")}
          {this.renderbutton("Save")}
        </form>
      </div>
    );
  }
}

export default NewFoodForm;
