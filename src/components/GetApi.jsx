import React, { useEffect, useState } from "react";
import axios from "axios";

function GetApi() {
  const [state, setState] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const getApidata = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        // console.log(response.data)
        setState(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getApidata();
  }, []);

  const handleClick = (data) => {
    setSelectedCountry(data);
    // console.log(selectedCountry);
  };


  return (
    <div>
      <ul>
        {state.map((data) => (
          <li key={data.name.common}>
            {data.name.common}
            <button onClick={() => handleClick(data)}>Population</button>
            {selectedCountry === data && <div>{data.population}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetApi;
