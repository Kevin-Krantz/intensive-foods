import React from "react";

function SearchBox({ value, onChange, placeholder = "Search..." }) {
  return (
    <input
      className="form-control"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}

export default SearchBox;
