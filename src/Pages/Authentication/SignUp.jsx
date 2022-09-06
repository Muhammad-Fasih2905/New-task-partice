import React from 'react'
import {useNavigate} from 'react-router-dom'

const SignUp = () => {

    let navigation = useNavigate()

    return (
        <div className='welcome-div'>
            <p>Register your account</p>
            <div className='welcome-inner'>
                <div onClick={() => navigation("/")}>
                    <p>Go Back</p>
                </div>
                <div onClick={() => navigation("/login")}>
                    <p>login</p>
                </div>
            </div>
        </div>
    )
}

export default SignUp