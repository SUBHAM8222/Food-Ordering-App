import Card from "../UI/Card";
import MealItem from "./MealsItem/MealsItem";
import classes from "./AvailableMeals.module.css";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "chicken",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealslist = DUMMY_MEALS.map((meals) => {
    return (
      <MealItem
        key={meals.id}
        id={meals.id}
        name={meals.name}
        description={meals.description}
        price={meals.price}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealslist}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
