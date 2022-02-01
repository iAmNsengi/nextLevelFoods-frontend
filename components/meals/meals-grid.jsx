import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

const MealsGrid = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li id={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};
