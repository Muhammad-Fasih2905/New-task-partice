import React, { useState } from 'react'


const Counter = () => {
  const [count, setCount] = useState(0);
  // console.log('inital value is',count)
  return (
    <div>
      <p>{count}</p>
      <button   onClick={() => setCount(count + 1)}>+</button>
      <button disabled={count === 0} onClick= {() => setCount(count - 1)}  >-</button>
    </div>
   

  )
}

export default Counter