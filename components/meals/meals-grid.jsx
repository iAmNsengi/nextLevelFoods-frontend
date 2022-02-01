import classes from "./meals-grid.module.css";

const MealsGrid = ({ meals }) => {
  return (
    <ul>
      {meals.map((meal) => (
        <li id={meal.id}></li>
      ))}
    </ul>
  );
};
