import React, { useState, useEffect } from "react";
import classes from "./Form.module.css";
import Item from "./Item";

const Form = () => {
  const [query, setQuery] = useState("");
  const [searchState, setSearchState] = useState([]);
  const [cityState, setCityState] = useState(null);
  console.log(query);

  const search = () => {
    try {
      fetch(
        `https://api.weatherapi.com/v1/search.json?key=d5874a8e60bf43c3a1f224457221102&q=${query}`
      )
        .then((res) => res.json())
        .then((data) => setSearchState(data.map((datas) => datas.name)));
    } catch (error) {
      console.error(error.message);
    }
  };

  const Load = (e) => {
    e.preventDefault();
    try {
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=d5874a8e60bf43c3a1f224457221102&q=${e.target.textContent}&aqi=no`
      )
        .then((res) => res.json())
        .then((data) => setCityState(data));

      console.log("asdasd");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <React.Fragment>
      <input
        placeholder='city'
        className={classes.input}
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={search}
      ></input>
      <div className={classes.seaPage}>
        {searchState.map((name) => (
          <a
            className={classes.item}
            key={Math.random().toString()}
            href={name}
            onClick={Load}
          >
            {name}
          </a>
        ))}
      </div>
      {cityState && (
        <div className={classes.new}>
          <Item
            name={cityState.location.name}
            date={cityState.location.localtime}
            temp={cityState.current.temp_c}
            cond={cityState.current.condition.text}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default Form;
