import React from "react";
// import { Palette } from "react-palette";

import classes from "./Card.module.css";

const card = (props) => {
  return (
    <div className={classes.CardContainer}>
      <div className={classes.CardPic}></div>
      <div className={classes.cardInfo}>
        <h3 className={classes.price}>$ {props.price}</h3>
        <h4>{props.name}</h4>
        <h5>{props.info}</h5>
      </div>
      <button className={classes.crdBtn}> Add to cart </button>
    </div>
  );
};

export default card;
