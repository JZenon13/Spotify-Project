import React from "react";
import ItemInfo from "./ItemInfo";

function Item({ items }) {
  return (
    <div>
      <ItemInfo key={items.id} items={items} />
    </div>
  );
}

export default Item;
