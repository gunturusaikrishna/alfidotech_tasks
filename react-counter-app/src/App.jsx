import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if(count>0) setCount(count - 1)
    else alert("Count cannot be negative");};
  const reset = () => setCount(0);

  return (
    <>
    <h1 style={{border:'1px solid black', background:'black',textAlign:'center',color:'white',width:'400px', height:'80px'}}>Count : {count}</h1><br/>
      <button style={{background:'green',margin:'10px'}}onClick={increment}>Increment</button>
      <button  style={{background:'red' ,margin:'10px'}}onClick={decrement}>Decrement</button>
      <button  style={{background:'grey' ,margin:'10px'}}onClick={reset}>Reset</button>

    </>
  );
}

export default App;
