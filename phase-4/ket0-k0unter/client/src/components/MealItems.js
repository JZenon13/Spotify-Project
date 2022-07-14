import React, { useState, useEffect } from "react";
import Item from "./Item";

function MealItems() {
  const [mealItems, setMealItems] = useState([]);
  const [searchFoods, setSearchFoods] = useState("Empty");

  useEffect(() => {
    fetch("/items")
      .then((res) => res.json())
      .then((data) => setMealItems(data));
  }, []);

  const filteredFoods = mealItems.filter(
    (food) => food.category === searchFoods
  );

  return (
    <div>
      <label for="entries">Choose a Category:</label>
      <select
        name="foodCat"
        id="foodCat"
        value={searchFoods}
        onChange={(e) => setSearchFoods(e.target.value)}
      >
        <option value="Empty"></option>
        <option value="Protein">Protein</option>
        <option value="Dairy">Dairy</option>
        <option value="Oils">Oils</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Fruits">Fruits</option>
        <option value="Nuts/Seeds">Nuts/Seeds</option>
        <option value="Herbs/Spices">Herbs/Spices</option>
        <option value="Other">Other</option>
      </select>

      {searchFoods === "Empty"
        ? mealItems.map((items) => {
            return <Item items={items} />;
          })
        : filteredFoods.map((items) => {
            return (
              <div key={items.id}>
                <Item items={items} />
              </div>
            );
          })}
    </div>
  );
}

export default MealItems;
