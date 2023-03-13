import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { Cities, CITIES_URL,  } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadoptions = (inputValue) => {
    return fetch(
      `${CITIES_URL}/cities?minPopuation=1000&namePrefix=${inputValue}`,
      Cities
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });

  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadoptions}
    />
  );
};

export default Search;

