import React, { useState } from 'react'
import './CounterComponent.css'

const CounterComponent = () => {
    const [counterVariable, setCounter] = useState(0);
    const incrementalFunction = () => {
        setCounter(counterVariable+1);
    }

    const decrementalFunction = () => {
        setCounter(counterVariable-1);
    }

    return (
    <div className='container' >
        <h1>Counter</h1>
        <div>{counterVariable}</div>
        {/* <h1>{c}</h1> */}
        <button onClick={incrementalFunction}>Increment</button>
        <button onClick={decrementalFunction}>Decrement</button>
    </div>
  )
}

export default CounterComponent

