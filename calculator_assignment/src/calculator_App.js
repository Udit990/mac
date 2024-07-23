import React, { useState, useReducer, useEffect } from "react";
import "./styles.css";

const initialState = { value: "" };

function reducer(state, action) {
  const operand1 = parseInt(action.operand1, 10);
  const operand2 = parseInt(action.operand2, 10);

  if (isNaN(operand1) || isNaN(operand2)) return initialState;

  switch (action.operator) {
    case "SUM":
      return {
        value: operand1 + operand2
      };
    case "DIFFERENCE":
      return {
        value: operand1 - operand2
      };
    case "PRODUCT":
      return {
        value: operand1 * operand2
      };
    case "QUOTIENT":
      return {
        value: operand1 / operand2
      };
    case "EXPONENTIATION":
      return {
        value: Math.pow(operand1, operand2)
      };
    default:
      return state;
  }
}

export default function App() {
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operator, setOperator] = useState("SUM");
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ operator, operand1, operand2 });
  }, [operand1, operand2, operator]);

  return (
    <div className="App">
      <h1>Calculator using react useReducer</h1>
      <div className="form">
        <input
          value={operand1}
          onChange={(evt) => setOperand1(evt.target.value)}
          type="number"
        />
        <select
          value={operator}
          onChange={(evt) => setOperator(evt.target.value)}
        >
          <option value="SUM">+</option>
          <option value="DIFFERENCE">-</option>
          <option value="PRODUCT">*</option>
          <option value="QUOTIENT">/</option>
          <option value="EXPONENTIATION">^</option>
        </select>
        <input
          value={operand2}
          onChange={(evt) => setOperand2(evt.target.value)}
          type="number"
        />
      </div>
      {state.value && <h2> result: {state.value}</h2>}
    </div>
  );
}
