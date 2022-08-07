import React from "react";

function Input({ name, label, value, onChange, error }) {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        className="form-control"
        id={name}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default Input;
