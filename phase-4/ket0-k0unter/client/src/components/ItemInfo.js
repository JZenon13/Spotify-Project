import React, { useState } from "react";
import ItemCard from "./ItemCard";
function ItemInfo({ items }) {
  const [oneItem, setOneItem] = useState(false);

  const handleClick = () => {
    setOneItem(!oneItem);
  };
  return (
    <>
      <div>
        <div key={items.id} className="itemBox">
          <div>
            <img className="" src={items.img_url} alt="item"></img>
          </div>
          <div>
            {oneItem ? <ItemCard items={items} /> : null}
            <div className="">
              <button onClick={() => handleClick()}>Item Info</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemInfo;
