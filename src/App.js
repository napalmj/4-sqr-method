import React, { useState, useEffect } from "react";
import styled from "styled-components";

import "./App.css";

const Box = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.055);
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 1px 2px rgba(124, 124, 124, 0.61);
  margin: 5px;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-evenly;

  li {
    font-size: 16px;
  }
`;

const BoxTitle = styled.h4`
  margin: 5px;
`;

const Input = styled.input`
  display: flex;
`;

function numericOnly(event) {
  if (!/[0-9]/.test(event.key)) {
    console.log('Warning: Numeric Values Only')
    event.preventDefault();
  }
}

// Need to use reducers here...
function App() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [investment, setInvestment] = useState(0);
  const [cashFlow, setCashFlow] = useState(0);
  const [roi, setRoi] = useState(0)

  useEffect(()=>{
    setCashFlow(income-expenses)
  }, [expenses, income])

  useEffect(() => {
    if (!investment) return;
    setRoi(100*((cashFlow*12) / investment))
  }, [cashFlow, investment])

  return (
    <div className="App">
      <header className="App-header">Four Square Method</header>
      <div className="main">
        <div className="grid-container">
          <Box>
            <BoxTitle>1. Income</BoxTitle>
            <p>Examples</p>
            <ul>
              <li>Rent</li>
              <li>Washer Dryer</li>
            </ul>
            <Input
              type="text"
              placeholder="$0"
              onChange={(e) =>
                setIncome(e.target.value)
              }
              onKeyPress={numericOnly}
            />
          </Box>
          <Box>
            <BoxTitle>2. Expenses</BoxTitle>
            <p>Examples</p>
            <ul>
              <li>Taxes</li>
              <li>Insurance</li>
              <li>Mortgage</li>
              <li>HOA</li>
              <li>Vacancy</li>
              <li>Repairs</li>
              <li>Capital Expenses</li>
            </ul>
            <Input
              type="text"
              placeholder="$0"
              name=""
              onChange={(e) => setExpenses(e.target.value)}
              onKeyPress={numericOnly}
            />
          </Box>
          <Box>
            <BoxTitle>3. Cash Flow</BoxTitle>
              <p>Income - Expenses = ${cashFlow}</p>
          </Box>
          <Box>
            <BoxTitle>4. Total Investment</BoxTitle>
            <p>Examples</p>
            <ul>
              <li>Down Payment</li>
              <li>Closing Costs</li>
              <li>Rehab Budget</li>
              <li>Other</li>
            </ul>
            <Input
              type="text"
              placeholder="$0"
              name=""
              onChange={(e) => setInvestment(e.target.value)}
            />
            Cash on Cash Return of Investment = {roi}%
          </Box>
        </div>
      </div>
    </div>
  );
}

export default App;
