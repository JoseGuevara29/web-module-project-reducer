import React, { useReducer } from "react";
import "./App.css";
import reducer, { initialState } from "./reducers/index.js";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  mPlus,
  mR,
  mC,
} from "./actions/index.js";

function App() {
  // console.log(initialState);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAdd = (e) => {
    dispatch(applyNumber(Number(e.target.outerText)));
    // console.log(e.target.outerText);
  };

  const handleOperation = (e) => {
    dispatch(changeOperation(e.target.outerText));
    // console.log(e.target.outerText);
  };
  const handleClear = (e) => {
    dispatch(clearDisplay(e.target.outerText));
    // console.log(e.target.outerText);
  };
  const handleMplus = (e) => {
    dispatch(mPlus(e.target.outerText));
    // console.log(e.target.outerText);
  };
  const handleMR = (e) => {
    dispatch(mR(e.target.outerText));
    // console.log(e.target.outerText);
  };
  const handleMC = (e) => {
    dispatch(mC(e.target.outerText));
    // console.log(e.target.outerText);
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer
          Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={handleMplus} />
              <CalcButton value={"MR"} onClick={handleMR} />
              <CalcButton value={"MC"} onClick={handleMC} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleAdd} />
              <CalcButton value={2} onClick={handleAdd} />
              <CalcButton value={3} onClick={handleAdd} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleAdd} />
              <CalcButton value={5} onClick={handleAdd} />
              <CalcButton value={6} onClick={handleAdd} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleAdd} />
              <CalcButton value={8} onClick={handleAdd} />
              <CalcButton value={9} onClick={handleAdd} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOperation} />
              <CalcButton value={"*"} onClick={handleOperation} />
              <CalcButton value={"-"} onClick={handleOperation} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClear} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
