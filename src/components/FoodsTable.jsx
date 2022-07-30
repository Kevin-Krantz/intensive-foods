import React from "react";
import Favorite from "./common/Favorite";

function FoodsTable({ foods, onFavor, onDelete }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Stock</th>
          <th>Price</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {foods.map((food) => (
          <tr key={food._id}>
            <td>{food.name}</td>
            <td>{food.category.name}</td>
            <td>{food.numberInStock}</td>
            <td>{food.price}</td>
            <td>
              <Favorite
                isFavorite={food.isFavorite}
                onFavor={() => onFavor(food)}
              />
            </td>
            <td>
              <button onClick={() => onDelete(food)} className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FoodsTable;
