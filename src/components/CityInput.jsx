import React, { useState } from "react";
import CityList from "./CityList";

const Challenge3 = () => {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);

  const addCity = (e) => {
    e.preventDefault();
    setCities([...cities, city]);
    setCity("");
  };

  return (
    <div className="cityFormWrapper">
      <form className="cityForm" onSubmit={addCity}>
        <input
          placeholder="Add city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <CityList cities={cities} setCities={setCities} />
    </div>
  );
};

export default Challenge3;
