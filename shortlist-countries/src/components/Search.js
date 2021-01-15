import React, { useRef, useEffect } from "react";

/* ---- continent ----- */
const continent = [
  {
    id: 0,
    continent: "Europe",
    color: "europe"
  },
  {
    id: 1,
    continent: "Asia",
    color: "asia"
  },
  {
    id: 2,
    continent: "Africa",
    color: "africa"
  },

  {
    id: 3,
    continent: "Australia",
    color: "australia"
  },
  {
    id: 4,
    continent: "North America",
    color: "north-america"
  },
  {
    id: 5,
    continent: "Central America",
    color: "central-america"
  },
  {
    id: 6,
    continent: "South America",
    color: "south-america"
  },
  {
    id: 7,
    continent: "Antarctica",
    color: "antarctica"
  }
];

function Search({ searchCountries, setSearchCountries }) {
  // A fonction to set Sereach value to change input value
  const changeSearchHandler = (e) => setSearchCountries(e.target.value);

  // Make input field focus on loads, so user can start typing after the page is loaded.
  // To do this we need useRef and useEffect to get hold on the input and keep a refrence to it.
  // const ref = useRef();

  useEffect(() => {
    // ref.current.focus();
  }, []); //  Here we pass an empty array to useEffect because we want the code to run only once.

  return (
    <header>
      <form>
        <input
          // ref={ref}
          value={searchCountries}
          onChange={changeSearchHandler}
          type="text"
          placeholder="Type..."
        />
      </form>

      <ul>
        {continent.map((c) => (
          <li className={c.color} key={c.id}>
            {c.continent}
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Search;
