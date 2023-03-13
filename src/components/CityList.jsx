import React from "react";

const CityLi = (props) => {
  const { cities, setCities } = props;

  const removeCity = (cityToFilter) => {
    // const filtered = cities.filter((city) => city != cityToFilter);
    // setCities(filtered);

    setCities((prevState) => prevState.filter((el) => el != cityToFilter));
  };

  return (
    <ul className="cityUl">
      {cities.map((city) => (
        <>
          <li key={city} className="cityLi">
            {city}
            <button
              className="cityDeleteBtn"
              onClick={() => {
                removeCity(city);
              }}
            >
              X
            </button>
          </li>
        </>
      ))}
    </ul>
  );
};

export default CityLi;
