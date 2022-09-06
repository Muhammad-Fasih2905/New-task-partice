import React from 'react'
import {useNavigate } from 'react-router-dom'
import Community from '../../../Text/Community'
import './Home.css'
import Features from '../../../NewFeauters/Features' 
const Home = () => {

  let navigation = useNavigate()

  return (
    <div className='Navbar'>
      <div className='Card-list' onClick={() => navigation("/home/cards")}>
        <p>Home</p>
      </div>
      <div className='Community-text' onClick={() => navigation("/Community")}>
        <p>Community</p>
        </div>
        <div className='features' onClick={() => navigation("/Features")}>
          <p>Features</p>
        </div>
      <div className='Wecome-page-button' onClick={() => navigation("/")}>
        <p>Back</p>
      </div>
    </div>

  )
}

export default Home