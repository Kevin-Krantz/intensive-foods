import React from "react";
import _ from "lodash";

function Pagination({ itemCount, pageSize, selectedPage, onPageChange }) {
  const pageCount = Math.ceil(itemCount / pageSize);

  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);

  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li
          key={page}
          className={page === selectedPage ? "page-item active" : "page-item"}
        >
          <button onClick={() => onPageChange(page)} className="page-link">
            {page}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
