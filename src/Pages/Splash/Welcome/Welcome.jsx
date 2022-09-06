import React from 'react'
import './Welcome.css'
import {useNavigate} from 'react-router-dom'

const Welcome = () => {

  let navigation = useNavigate()

  return (
    <div className='welcome-div'>
      <p>Hello welcome to the app</p>
      <div className='welcome-inner'>
        <div onClick={()=> navigation("/login")}>
          <p>Login</p>
        </div>
        <div onClick={()=> navigation("/signup")}>
          <p>Signup</p>
        </div>
      </div>
    </div>
  )
}

export default Welcome