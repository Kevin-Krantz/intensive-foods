import { getCategories } from "./fakeCategoryService";

const foods = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Apple",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Fruit" },
    numberInStock: 6,
    price: 10,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Banana",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Fruit" },
    numberInStock: 5,
    price: 15,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Cucumber",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "Vegetables" },
    numberInStock: 8,
    price: 7,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "Chips",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "Snacks" },
    numberInStock: 7,
    price: 12,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    name: "Cookies",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "Snacks" },
    numberInStock: 7,
    price: 8,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    name: "Muffins",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "Snacks" },
    numberInStock: 7,
    price: 13,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    name: "Carrot",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "Vegetables" },
    numberInStock: 7,
    price: 7,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    name: "Sallad",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "Vegetables" },
    numberInStock: 4,
    price: 14,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    name: "Orange",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Fruit" },
    numberInStock: 7,
    price: 20,
  },
];

export function getFoods() {
  return foods;
}

export function getFood(id) {
  return foods.find((food) => food._id === id);
}

export function saveFood(food) {
  let foodInDb = foods.find((f) => f._id === food._id) || {};
  foodInDb.name = food.name;
  foodInDb.category = getCategories().find(
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

export function deleteFood(id) {
  let foodInDb = foods.find((food) => food._id === id);
  foods.splice(foods.indexOf(foodInDb), 1);
  return foodInDb;
}
