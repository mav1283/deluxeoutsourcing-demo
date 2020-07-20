import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

function HiwStep({ id, name, description, icon, items }) {
  return (
    <div className="hiw-step">
      <div className="hiw-id">
        <p>{id}</p>
      </div>
      <div className="hiw-step-details">
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="hiw-icon">{icon}</div>
        <ul className="hiw-lists">
          {items.map((item) => (
            <li key={item.itemId}>
              <FaRegCheckCircle />
              {item.itemName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HiwStep;
