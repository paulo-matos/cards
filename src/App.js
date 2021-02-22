import React, { useState } from 'react';
import './App.css';

import Interval from './components/Interval'
import Average from './components/Average'
import Sum from './components/Sum'
import Random from './components/Random'

function App() {
  const [min, setMin] = useState(10)
  const [max, setMax] = useState(100)

  return (
    <div className="App">

      <h1>Project-Redux</h1>

      <div className='linha'>
        <Interval min={min} max={max}
        onMinChange={setMin} onMaxChange={setMax}
        ></Interval>
      </div>

      <div className='linha'>
        <Average min={min} max={max}></Average>
        <Sum min={min} max={max}></Sum>
        <Random min={min} max={max}></Random>
      </div>

    </div>
  );
}

export default App;
