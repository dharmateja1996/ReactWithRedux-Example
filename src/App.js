import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Todo from "./components/Todo";

const App = () => {
  const gState = useSelector((state) => state.reducerIncDec);
  const dispatch = useDispatch();
  console.log(gState);

  const onIncrement = () => {
    dispatch({ type: "INC" });
  };

  const onDecrement = () => {
    dispatch({ type: "DEC" });
  };
  return (
    <div className="App">
      <div className="increment-decrement-container">
        <h1>Increment & Decrement Example</h1>

        <h1>{gState.count}</h1>

        <div>
          <button onClick={onIncrement} style={{ marginRight: "20px" }}>
            +
          </button>
          <button onClick={onDecrement} style={{ marginLeft: "20px" }}>
            -
          </button>
        </div>
      </div>
      <Todo />
    </div>
  );
};

export default App;
