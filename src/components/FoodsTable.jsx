import React, { Component } from "react";
import Favorite from "./common/Favorite";
import Table from "./common/Table";

class FoodsTable extends Component {
  columns = [
    { label: "Name", path: "name" },
    { label: "Category", path: "category.name" },
    { label: "Stock", path: "numberInStock" },
    { label: "Price", path: "price" },
    {
      key: "favorite",
      content: (food) => (
        <Favorite
          isFavorite={food.isFavorite}
          onFavor={() => this.props.onFavor(food)}
        />
      ),
    },
    {
      key: "delete",
      content: (food) => (
        <button
          onClick={() => this.props.onDelete(food)}
          className="btn btn-danger"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { foods, sortColumn, onSort } = this.props;

    return (
      <Table
        data={foods}
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default FoodsTable;
