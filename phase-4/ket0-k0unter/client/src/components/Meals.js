import React, { useState, useEffect } from "react";

function Meals() {
  const [meals, setMeals] = useState([]);
  const [typeSearch, setTypeSearch] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/meals")
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);
  const foodsToShow = meals.filter((item) =>
    item.name.toLowerCase().includes(typeSearch.toLowerCase())
  );
  console.log(meals);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(typeSearch);
  };

  return (
    <div>
      <form className="text-center" onSubmit={handleSubmit}>
        Meals:{" "}
        <input
          type="text"
          id="search"
          placeholder="Search meals"
          value={typeSearch}
          onChange={(e) => setTypeSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {meals.map((meal) => {
        return (
          <div key={meal.name} className="itemBox">
            <h2>{meal.name}</h2>
            <img src={meal.img_url} alt="item"></img>
          </div>
        );
      })}
    </div>
  );
}

export default Meals;
