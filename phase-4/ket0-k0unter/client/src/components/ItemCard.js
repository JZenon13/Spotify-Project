import React from "react";

function ItemCard({ items }) {
  return (
    <div className="itemBox">
      <h4 classname="descriptionText">{items.name}</h4>
      <h5 classname="descriptionText">Carbs:{items.carbs}</h5>
      <h5 classname="descriptionText">Category:{items.category}</h5>
      <h6 classname="descriptionText">Blurb:{items.description}</h6>
    </div>
  );
}

export default ItemCard;
