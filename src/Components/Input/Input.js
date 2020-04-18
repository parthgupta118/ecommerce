import React from "react";

import classes from "./Input.module.css";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className={classes.Input}>
      <label className={classes.Label} htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className={classes.InputElement} />
      {error && <div className={classes.AlertDanger}>{error}</div>}
    </div>
  );
};

export default Input;
