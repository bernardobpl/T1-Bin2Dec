import React, { useState } from 'react';
import './app.css';

function App() {
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState('');
  

  function convert2dec(){
    //input characters check
    if (binary.match(/^[0-1]+$/g) === null){
      alert('Only 0 and 1');
      return
    }

    //logic
    //use reverse() method so it isn't necessary to use string.lenght
    let binaryint = binary.split('').reverse().map(Number);
    let result = binaryint.reduce(
      (sum, next, index) => (sum + next*(2**index))
    );

    setDecimal(result);
  }

  return (
    <div className="App">
        <h1> Binary to Decimal Convert</h1>

        <label style={{marginLeft:'5px'}}> Binary: </label>
        <input type="text" placeholder="0 and 1" value={binary} onChange={e => setBinary(e.target.value)}/>
        <button onClick={convert2dec}> Convert to Dec</button>
        <br/><br/>

        <label> Decimal: </label>
        <input id="resultinp" type="number" placeholder="Result" value={decimal} readOnly/>
      </div>
  );
}

export default App;
