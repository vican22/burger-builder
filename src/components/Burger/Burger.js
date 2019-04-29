import React from "react";
import classes from "./Burger.module.css";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  let arrayOfIngredients = [];

  for (let key in props.ingredients) {
    //salad, meat, cheese
    for (let i = 0; i < props.ingredients[key]; i++) {
      //props.ingredient[salad]..
      arrayOfIngredients.push(<BurgerIngredient key={key + i} type={key} />);
    }
  }

  arrayOfIngredients.reduce((prev, current) => {
    return prev.concat(current);
  }, []);

  if (arrayOfIngredients.length === 0) {
    arrayOfIngredients = <p>Please start adding ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {arrayOfIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
