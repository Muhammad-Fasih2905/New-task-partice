
import { useTab } from '@mui/base'
import { display } from '@mui/system'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  let navigation = useNavigate()

  const [isVisible, setIsVisible] = useState(true)

  // const colour = () =>{
  //   <li style={{color: text === "p" ? "trueColor" : "falseColor"}} />
  // }



  return (
    <div className='welcome-div'>
      <p>Please Login</p>
      <div className='welcome-inner'>
        <div onClick={() => navigation("/")}>
          <p>Go Back</p>
        </div>
        {
          isVisible ? (
            <div>
              <p>Signup</p>
            </div>
          ) : null
        }

        <div onClick={() => setIsVisible(!isVisible)}>
          <p>Change Color</p>
        </div>
      </div>
    </div>
  )
}

export default Login