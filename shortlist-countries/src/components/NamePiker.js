import React from "react";
import CountriesList from "./CountriesList";

function NamePiker({ data, searchCountries, shortList, setShortList }) {
  // Create a function to add the selected country to the shortlist
  const addToShortList = (id) => setShortList([...shortList, id]);

  // Filter through names
  const filterNames = data
    // Here we keep the name/names which are match with what user types
    .filter((type) =>
      type.name.toLowerCase().includes(searchCountries.toLowerCase())
    )
    // Here we check if the shortlist includes data id.
    .filter((type) => !shortList.includes(type.id));

  return <CountriesList item={filterNames} onClickItem={addToShortList} />;
}

export default NamePiker;
