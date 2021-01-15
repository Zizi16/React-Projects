import React, { useState } from "react";
import NamePiker from "./components/NamePiker";
import Search from "./components/Search";
import ShortList from "./components/ShortList";
import data from "./data/data";

import "./styles.css";

export default function App() {
  const [searchCountries, setSearchCountries] = useState("");
  const [shortList, setShortList] = useState([]);

  return (
    <main className="App">
      <Search
        searchCountries={searchCountries}
        setSearchCountries={setSearchCountries}
      />
      <ShortList
        data={data}
        shortList={shortList}
        setShortList={setShortList}
      />
      <NamePiker
        data={data}
        searchCountries={searchCountries}
        shortList={shortList}
        setShortList={setShortList}
      />
    </main>
  );
}
