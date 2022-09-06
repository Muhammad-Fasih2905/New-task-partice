
// import React, { useState } from 'react'

// function Calculator() {
//   const [bmi, setBmi] = useState()
//   const [info, setInfo] = useState()
//   const [height, setHeight] = useState()
//   const [weight, setWeight] = useState()
//   const handleBmi = () =>{
//     let val = (
//       (weight/ height)/39.37

//     ).toFixed(1);
//     setBmi(val);
//   }


//   return (
//     <div>
//       <input type="text" onChange={(e => setHeight(e.target.value))} placeholder = "Height in feet" />
//       <input type='text' onChange={(e => setWeight(e. target.value))} placeholder ='Weight in kg'/>

//       <button onClick={handleBmi}>Calculate</button>
//       <h1>{bmi}</h1>
//       <h2>{info}</h2>

//        </div>
//   )
// }
// export default Calculator

import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {
  const [weight, setWeight] = useState("")
  const [heightFoot, setHeightFoot] = useState("")
  const [heightInches, setHeightInches] = useState("")
  const [result, setResult] = useState("")
  const [output, setOutput] = useState("")

  const CalculateBMI = () => {

    if (weight === 0 || heightFoot === 0 || heightInches === 0) {
      alert("Please Fill all the values")
      return
    }

    let inchConverter = heightFoot * 12
    let totalInch = inchConverter + heightInches
    let totalHeight = totalInch / 39.37

    let finalAns = (weight / 2.205) / ((totalHeight * totalHeight) / 10000)

    setResult(finalAns.toFixed(3))

    console.log(finalAns.toFixed(0))
    if (finalAns.toFixed(0) < 10) {
      setOutput("Light weight")
    } else if (finalAns.toFixed(0) > 10 && finalAns.toFixed(0) < 20) {
      setOutput("Normal")
    } else if (finalAns.toFixed(0) >= 20 && finalAns.toFixed(0) <= 30) {
      setOutput("Overweight")
    } else if (finalAns.toFixed(0) > 30) {
      setOutput("Unhealthy")
    }
    else {
      setOutput("")
    }
  }

  return (
    <div className='top-div'>
      <div>Calculator</div>
      <div className='main-div'>
        <div className='each-div'>
          <p>Enter Weight</p>
          <input value={weight} onChange={e => setWeight(e.target.value)} type="text" placeholder='weight(kg)' />
        </div>
        <div className='each-div'>
          <p>Enter Foot</p>
          <input value={heightFoot} onChange={e => setHeightFoot(e.target.value)} type="text" placeholder='Foot(ft)' />
        </div>
        <div className='each-div'>
          <p>Enter Inches</p>
          <input value={heightInches} onChange={e => setHeightInches(e.target.value)} type="text" placeholder='Inches(in)' />
        </div>
      </div>

      <p onClick={CalculateBMI} className='btn'>Calculate</p>
      <div>
        <p>BMI is</p>
        <p>{result || 'Please Fill Inputs'}</p>
        <p>{output}</p>
      </div>
    </div>

  )
}

export default Calculator


/*
 
BMI < 10  (lightweight)
BMI >=10 and <20 (normal)
BMI >=20 and <30 (overweight)
BMI >=30 (unhealthy  )
*/