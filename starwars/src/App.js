import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import StarWars from "./components/StarWars";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        console.log(response.data);
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <h1>Star Wars</h1>
      {data.map((starData, index) => {
        console.log(starData);
        return (
          <StarWars
            key={index}
            name={starData.name}
            height={starData.height}
            mass={starData.mass}
          />
        );
      })}
    </div>
  );
}
// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.
// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.
