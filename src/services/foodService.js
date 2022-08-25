import http from "../services/httpService";
import config from "../services/config.json";

import { getCategories } from "./categoryService";

export async function getFoods() {
  const { data: foods } = await http.get(config.apiEndPoint);
  return foods;
}

export async function getFood(id) {
  const { data } = await http.get(config.apiEndPoint);
  const foods = data.find((food) => food._id === id);
  return foods;
}

export async function saveFood(food) {
  const foods = await getFoods();
  console.log(foods);
  let foodInDb = foods.find((f) => f._id === food._id) || {};
  foodInDb.name = food.name;
  foodInDb.category = (await getCategories()).find(
    (category) => category._id === food.categoryId
  );
  foodInDb.numberInStock = food.numberInStock;
  foodInDb.price = food.price;

  if (!foodInDb._id) {
    foodInDb._id = Date.now().toString();
    foods.push(foodInDb);
  }

  return foodInDb;
}

export async function deleteFood(id) {
  const { data } = await http.delete(config.apiEndPoint);
  const foods = data.find((food) => food._id === id);
  return foods;
}
