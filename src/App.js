import { FormControl, Select, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  //useeffect = runs a piece of code on basis of given condition
  // USESTATE = short term memory; STATE=how to write a variable in REACT
  //https://disease.sh/v3/covid-19/countries

  useEffect(() => {
    //async = send a request, wait for it, do something with it
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, //United States, United Kingdom
            value: country.countryInfo.iso2, //USA,Uk
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
    //if sq. bracket down is empty, it will run one time when component loads and not again
    //if something(variable/variables) inside then once at starting and again if that variable change
  }, []);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  };
  return (
    <div className="app">
      {/* Header */}
      {/* Title + Select input dropdown field */}
      <div className="app__header">
        <h1>Covid Tracker</h1>

        <FormControl className="app_dropdown">
          <Select variant="outlined" value={country} onChange={onCountryChange}>
            {/* Loop through all the countries and show options for drop down */}
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="app__stats">
        {/* InfoBoxes */}
        {/* InfoBoxes */}
        {/* InfoBoxes */}
      </div>

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
