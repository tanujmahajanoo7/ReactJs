import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter,setCounter] = useState(0);

  const addValue = ()=>{
    if(counter<20) {
      setCounter(counter+1);
    }
  };

  let removeValue = () => {
    if(counter>0) {
      setCounter(counter-1);
    }
  };

  return (
    <>
      <h1>Counter mini project</h1>
      <h2>Counter Value : {counter} </h2>
      <button onClick={addValue}>Increase</button>
      <br/>
      <button onClick={removeValue}>Decrease</button>
    </>
  )
}

export default App
