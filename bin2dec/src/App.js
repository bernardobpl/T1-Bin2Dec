import React, { useState } from 'react';

function App() {
  const [binary, setBinary] = useState('');
  //const [decimal, setDecimal] = useState('');
  

  function convert(){
     //binary
     // setDecimal(result);

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Binary to Decimal </h1>
      </header>
      <div className="main">
        <label> Binary: </label>
        <input className="entry" type="text" placeholder="0 and 1" value={binary} onChange={e => setBinary(e.target.value)}/>
        <label> Decimal: </label>
        <input type="number" placeholder="Result"  readOnly/>
        <input type="button" onClick={convert}/>
      </div>
    </div>
  );
}

export default App;
