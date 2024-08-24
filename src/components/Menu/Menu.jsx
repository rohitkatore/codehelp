import React from "react";
import "./Menu.css";

function Menu({ categoryData, category, setCategory }) {

  return (
    <div className="menu">
      {categoryData.map((item) => {
        return (
          <button
            key={item.id}
            onClick={() => setCategory(item.title)}
            className={category === item.title ? "active" : ""}
          >
            {item.title}
          </button>
        );
        })}
    </div>
  );
}

export default Menu;
