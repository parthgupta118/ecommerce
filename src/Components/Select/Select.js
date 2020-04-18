import React from "react";
import classes from "./Select.module.css";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className={classes.Container}>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest} className="form-control">
        <option value="" />
        {options.map(option => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
