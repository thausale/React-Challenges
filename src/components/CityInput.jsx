import React, { useState } from "react";
import CityList from "./CityList";

const Challenge3 = () => {
  const [input, setInput] = useState("");
  const [cities, setCities] = useState([]);

  const addCity = (e) => {
    e.preventDefault();
    setCities((prevState) => [...prevState, input]); //SAFER FOR BIG APPS, IN CASE OF ASYNC STUFF ETC
    setCity("");
  };

  return (
    <div className="cityFormWrapper">
      <form className="cityForm" onSubmit={addCity}>
        <input
          placeholder="Add city"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <CityList cities={cities} setCities={setCities} />
    </div>
  );
};

export default Challenge3;
