import React from "react";

function DropDown({ name, label, value, onChange, error, categories }) {
  return (
    <div>
      {console.log(categories)}
      <label htmlFor={name} className="form-label">
        {label}
      </label>

      <select
        onChange={onChange}
        value={value}
        name={name}
        htmlFor={name}
        className="form-select"
      >
        {categories.map((data) => (
          <option value={data._id} key={data._id}>
            {data.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default DropDown;

// försök att göra en reusable component här som ska göra en sån där dropdown som jag ska kunna anropa i newfoodform.

// import React from "react";

// function Input({ name, label, value, onChange, error }) {
//   return (
//     <div className="mb-3">
//       <label htmlFor={name} className="form-label">
//         {label}
//       </label>
//       <input
//         onChange={onChange}
//         value={value}
//         className="form-control"
//         id={name}
//         name={name}
//       />
//       {error && <div className="alert alert-danger">{error}</div>}
//     </div>
//   );
// }

// export default Input;
