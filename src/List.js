import React, { useState, useEffect } from "react";
import Item from "./Item";
import classes from "./List.module.css";

const List = () => {
  const [istState, setİstState] = useState(null);
  const [tokyoState, setTokyoState] = useState(null);
  const [sydneyState, setsydneyState] = useState(null);
  const [capState, setcapState] = useState(null);

  const istUrl = `https://api.weatherapi.com/v1/current.json?key=d5874a8e60bf43c3a1f224457221102&q=istanbul&aqi=no`;
  const tokUrl = `https://api.weatherapi.com/v1/current.json?key=d5874a8e60bf43c3a1f224457221102&q=tokyo&aqi=no`;
  const sydUrl = `https://api.weatherapi.com/v1/current.json?key=d5874a8e60bf43c3a1f224457221102&q=sydney&aqi=no`;
  const mekUrl = `https://api.weatherapi.com/v1/current.json?key=d5874a8e60bf43c3a1f224457221102&q=yakutsk&aqi=no`;

  useEffect(() => {
    try {
      fetch(istUrl)
        .then((res) => res.json())
        .then((data) => setİstState(data));
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  useEffect(() => {
    try {
      fetch(tokUrl)
        .then((res) => res.json())
        .then((data) => setTokyoState(data));

      console.log("asdasd");
    } catch (error) {
      console.error(error.message);
    }
  }, []);
  useEffect(() => {
    try {
      fetch(sydUrl)
        .then((res) => res.json())
        .then((data) => setsydneyState(data));

      console.log("asdasd");
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  useEffect(() => {
    try {
      fetch(mekUrl)
        .then((res) => res.json())
        .then((data) => setcapState(data));

      console.log("asdasd");
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  if (istState && tokyoState && capState && sydneyState) {
    return (
      <div className={classes.container}>
        <Item
          name={istState.location.name}
          date={istState.location.localtime}
          temp={istState.current.temp_c}
          cond={istState.current.condition.text}
        />
        <Item
          name={sydneyState.location.name}
          date={sydneyState.location.localtime}
          temp={sydneyState.current.temp_c}
          cond={sydneyState.current.condition.text}
        />

        <Item
          name={capState.location.name}
          date={capState.location.localtime}
          temp={capState.current.temp_c}
          cond={capState.current.condition.text}
        />
      </div>
    );
  }
  return <div></div>;
};

export default List;
