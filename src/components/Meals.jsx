import { useEffect } from "react";
import { useState } from "react";
import MealIteam from "./MealIteam";

const url = "http://localhost:3000/meals";

export default function Meals() {
  const [LoadedMeals, SetLoadedMeals] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch(url);

      if (!response.ok) {
        // ...
      }

      const meals = await response.json();
      SetLoadedMeals(meals);
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {LoadedMeals.map((meal) => (
        <MealIteam key={meal.id} meal={meal}/>
      ))}
    </ul>
  );
}
