import {useState} from 'react'
import './App.css'
export const App = () => {
  const [advice, setAdvice]=useState("Please click the below button to get an advice")
  const [count, setCount]=useState(0)
  
  async function getAdvice(){
    const res= await fetch("https://api.adviceslip.com/advice")
    const data= await res.json()
    setAdvice(data.slip.advice)
    setCount((c)=> c+1)

  }
  return (
    
    <div>
      <h3>{advice}</h3>
      <button onClick={getAdvice}>Get Advice</button>
      <p>You got <b>{count}</b> advices today!!! </p>
      </div>
  )
}
