import { Circle, Popup } from "react-leaflet";
import numeral from "numeral";
export const sortData = (data) => {
  const sortedData = [...data];
  sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
  return sortedData;
};
//draw circles on the map with interactive tooltip

export const casesTypeColors = {
  cases: {
    bgColor: "rgba(255, 108, 71	,0.5)",
    hex: "#ff6c47",
    multiplier: 80,
  },
  recovered: {
    bgColor: "rgba(119,215,29,0.5)",
    hex: "#77d71d",
    multiplier: 120,
  },
  deaths: {
    bgColor: "rgba(204,16,52,0.5)",
    hex: "#cc1034",
    multiplier: 200,
  },
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";
export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      pathOptions={{
        color: casesTypeColors[casesType].hex,
        fillColor: casesTypeColors[casesType].hex,
      }}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info__container">
          <div
            className="info__flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div className="info__name">{country.country}</div>
          <div className="info__confirmed">
            Cases : {numeral(country.cases).format("0,0")}
          </div>
          <div className="info__recovered">
            Recovered : {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info__deaths">
            Deaths : {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
