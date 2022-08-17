import Joi from "joi";
import React from "react";
import Form from "./common/Form";
import { getCategories } from "../services/fakeCategoryService";
import { getFood, saveFood } from "../services/fakeFoodService";

class FoodForm extends Form {
  state = {
    data: { _id: "", name: "", categoryId: "", numberInStock: "", price: "" },
    errors: {},
    categories: [],
  };

  schema = Joi.object({
    _id: Joi.string().allow(""),
    name: Joi.string().required().label("Name"),
    categoryId: Joi.string().required().label("Category"),
    numberInStock: Joi.number().min(0).max(100).required().label("Stock"),
    price: Joi.number().required().min(0).max(10).label("Price"),
  });

  componentDidMount() {
    const categories = getCategories();
    this.setState({ categories });

    const foodId = this.props.match.params.id;
    if (foodId === "new") return;

    const food = getFood(foodId);
    if (!food) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(food) });
  }

  mapToViewModel(food) {
    return {
      _id: food._id,
      name: food.name,
      categoryId: food.category._id,
      numberInStock: food.numberInStock,
      price: food.price,
    };
  }

  doSubmit = () => {
    saveFood(this.state.data);
    this.props.history.push("/foods");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("name", "Name")}
        {this.renderDropDown("categoryId", "Category", this.state.categories)}
        {this.renderInput("numberInStock", "Stock")}
        {this.renderInput("price", "Price")}
        {this.renderbutton("Save")}
      </form>
    );
  }
}

export default FoodForm;
