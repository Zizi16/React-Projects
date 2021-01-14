import React from "react";

function CountriesList({ item, onClickItem }) {
  return (
    <ul>
      {item.map((data) => (
        <li
          key={data.id}
          className={data.color}
          onClick={() => onClickItem(data.id)}
        >
          {data.name}
        </li>
      ))}
    </ul>
  );
}

export default CountriesList;
