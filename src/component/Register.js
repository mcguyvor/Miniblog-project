import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import UserSessionService from '../service/userSessionService'
const Register = (props) => {
    const initialInput = { email: '', password: '', displayName: '' }

    const [input, setInput] = useState(initialInput)

    const initialValidate = { emailError: '', passwordError: '', displayNameError: '' }

    const [errorMessage, setError] = useState(initialValidate)

    const service = UserSessionService.shared

    const [done, setDone] = useState(false)

    const validateForm = () => {
        let emailError = ''
        let displayNameError = ''
        let passwordError = ''
        const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!input.email) {
            emailError = 'Please enter your email address'
        }
        if (!input.email.match(email)) {
            emailError = 'Please enter the correct email format'
        }
        if (!input.displayName) {
            displayNameError = 'Please enter the display'
        }
        if (!input.password) {
            passwordError = 'Please enter password'
        }
        if (emailError || displayNameError || passwordError) {
            setError({ emailError: emailError, passwordError: passwordError, displayNameError: displayNameError })
            return false
        } else {
            return true
        }
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const isValid = validateForm()
        if (isValid) {
            // post method to end point
            try {
                await service.register(input.email, input.displayName, input.password)

                props.history.push('/')
            } catch (error) {
                alert(error.message)
            }
            console.log(input)
            setError(initialValidate)
            // e.target.reset();
        }
    }

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const renderRegisterForm = () => {
        return (

            <div className='container vertical-center'>
                <form className='w-100' onSubmit={handleOnSubmit}>

                    <div className="form-group">
                        <label htmlFor="InputEmail"><strong>Email address</strong></label>
                        <input type="email" onChange = {handleChange} className="form-control" id="InputEmail" aria-describedby="emailHelp" name='email' placeholder='Email address'/>
                        {errorMessage.emailError ? <small id="emailHelp" className="form-text text-danger">{errorMessage.emailError}</small> : null}
                    </div>

                    <div className="form-group">
                        <label htmlFor="InputPassword"><strong>Display Name</strong></label>
                        <input type="text" onChange = {handleChange} className="form-control" id="InputPassword" name='displayName' placeholder='Display name' required="required"/>
                        {errorMessage.displayNameError ? <small id="emailHelp" className="form-text text-danger">{errorMessage.displayNameError}</small> : null}

                    </div>

                    <div className="form-group">
                        <label htmlFor="InputPassword"><strong>Password</strong></label>
                        <input type="password" onChange = {handleChange} className="form-control" id="InputPassword" name='password' placeholder='Password' required="required"/>
                        {errorMessage.passwordError ? <small id="emailHelp" className="form-text text-danger">{errorMessage.passwordError}</small> : null}

                    </div>

                    <button type="submit" onClick={handleOnSubmit} className="btn btn-outline-primary mr-2">Sign Up</button>
                    <Link to ='/' activeStyle={{ color: 'white' }}><button type="submit" className="btn btn-outline-danger">Cancel</button></Link>

                </form>
            </div>

        )
    }
    return (
        <div>
            {renderRegisterForm()}
        </div>
    )
}
export default Register
