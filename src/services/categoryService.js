import axios from "axios";

export async function getCategories() {
  const { data: categories } = await axios.get(
    "http://localhost:8000/api/categories"
  );
  return categories;
}
