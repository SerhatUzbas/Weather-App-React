import classes from "./App.module.css";
import List from "./List";
import Form from "./Form";
const App = () => {
  return (
    <div className={classes.container}>
      <Form />
      <List />
    </div>
  );
};

export default App;
