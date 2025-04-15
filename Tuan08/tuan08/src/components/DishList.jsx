import { useState, useEffect } from "react";
import DishCard from "./DishCard";
import sampleDish from "../assets/sample-dish.png";

const DishList = () => {
  const [seasonalDishes, setSeasonalDishes] = useState([]);
  const [guidedDishes, setGuidedDishes] = useState([]);

  useEffect(() => {
    setSeasonalDishes([
      { name: "Tomato Basil Pasta", time: "15 mins", image: sampleDish },
      { name: "Veggie Stir Fry", time: "12 mins", image: sampleDish },
      { name: "Green Salad Mix", time: "10 mins", image: sampleDish },
      { name: "Fruit Tart", time: "25 mins", image: sampleDish },
    ]);
    setGuidedDishes([
      { name: "Spicy Noodle Soup", time: "20 mins", image: sampleDish },
      { name: "Baked Salmon", time: "18 mins", image: sampleDish },
      { name: "Egg Fried Rice", time: "15 mins", image: sampleDish },
      { name: "Berry Smoothie", time: "5 mins", image: sampleDish },
    ]);
  }, []);

  return (
    <div className="p-4">
      <section className="my-8">
        <h2 className="text-2xl font-bold text-blue-600 text-center">
          Seasonal Dishes
        </h2>
        <p className="text-gray-600 text-center mb-4">
          Fresh picks for the season.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {seasonalDishes.map((dish, i) => (
            <DishCard key={i} dish={dish} />
          ))}
        </div>
      </section>
      <section className="my-8 bg-gray-50 p-4 rounded">
        <h2 className="text-2xl font-bold text-blue-600 text-center">
          Guided Recipes
        </h2>
        <p className="text-gray-600 text-center mb-4">Learn with easy steps.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {guidedDishes.map((dish, i) => (
            <DishCard key={i} dish={dish} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default DishList;
