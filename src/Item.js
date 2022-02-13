import classes from "./Item.module.css";

const Item = (props) => {
  const clss = `${classes.card} ${
    props.temp > 10 ? classes.hot : classes.cold
  }`;
  return (
    <div className={clss}>
      <div className={classes.city}>
        <h2>{props.name}</h2>
      </div>
      <div className={classes.date}>
        <h3>{props.date}</h3>
      </div>
      <div className={classes.temp}>
        <h3>{props.temp}°C</h3>
      </div>
      <div className={classes.situation}>
        <h2>{props.cond}</h2>
      </div>
    </div>
  );
};

export default Item;
