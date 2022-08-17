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
    this.setState({ categories });
  }

  schema = Joi.object({
    name: Joi.string().required().min(2).label("Name"), // fluent API
    categoryId: Joi.string().required().label("Category"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"), // name category number in stock price
    price: Joi.number().required().max(10).label("Price"),
  });

  doSubmit = () => {
    console.log("Saving food");
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
