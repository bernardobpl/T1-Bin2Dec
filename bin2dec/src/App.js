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

  function convert2bin(){
    //input characteres check
    if (decimal.match(/^\d+$/g) === null){
      alert('Only Numbers');
      return
    } else if (decimal === '0'){        //the algorithm has an expection in 0
      setBinary(decimal);
      return
    }
    
    let decimalparts = decimal;         //decrement variable

    //using log to know how many bits will need
    let currentbin = Math.floor(Math.log2(decimalparts));
    let result = new Array(currentbin+1).fill(0);

    //wich bits are going to be 1
    do{
      result[currentbin] = 1;
      decimalparts -= 2**currentbin;
      currentbin = Math.floor(Math.log2(decimalparts));
    }
    while(decimalparts>0);

    //adjust format
    result = result.map(String).reverse().join('');
    setBinary(result);
  }

  return (
    <div className="App">
        <h1> Binary and Decimal Convert</h1>

      <div className="binary-box" style={{marginLeft:'5px'}}>
        <label style={{marginLeft:'5px'}}> Binary: </label>
        <input type="text" placeholder="0 and 1" value={binary} onChange={e => setBinary(e.target.value)}/>
        <button onClick={convert2dec}> Convert to Dec</button>
        <br/><br/>
      </div>

      <div className="decimal-box"></div>
        <label> Decimal: </label>
        <input id="resultinp" type="number" placeholder="Result" value={decimal} onChange={e => setDecimal(e.target.value)}/>
        <button onClick={convert2bin}> Convert to Bin</button>
      </div>
  );
}

export default App;
