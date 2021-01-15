import React from "react";
import CountriesList from "./CountriesList";

function ShortList({ data, shortList, setShortList }) {
  // Add the name to the shortlist using filter()
  const shortListCountries = data.filter((e) => shortList.includes(e.id));

  // Remove the name from the shortlist using filter()
  function removeFromShortlist(d) {
    setShortList(shortList.filter((e) => e !== d));
  }

  const hasCountries = shortListCountries.length > 0;

  return (
    <div className="favourites">
      {/* Display difftent title base on hasCountries logic*/}
      <h2>
        {hasCountries
          ? "My favourite countries to visit"
          : "What countries do you like to visit?"}
      </h2>

      {/* By using "hasCountries &&" we only render the countries list if hasCountries is true */}
      {hasCountries && (
        <CountriesList
          item={shortListCountries}
          onClickItem={removeFromShortlist}
        />
      )}
      <hr />
    </div>
  );
}

export default ShortList;
