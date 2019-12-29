import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import '../style/Login.css'
import Nav from './common/Nav'
import UserSessionService from '../service/userSessionService'
import { isLogIn } from '../action/index'
import { Spinner } from 'reactstrap'

const LogInPage = (props) => {
    const initialInput = { email: '', password: '' }

    const [input, setInput] = useState(initialInput)

    const initialValidate = { emailError: '', passwordError: '' }

    const [errorMessage, setError] = useState(initialValidate)

    const [loading, setLoading] = useState(false)

    const service = UserSessionService.shared

    const dispatch = useDispatch()

    const validateForm = () => {
        let emailError = ''
        const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!input.email) {
            emailError = 'Please enter your email address'
        }
        if (!input.email.match(email)) {
            emailError = 'Please enter the correct email format'
        }
        if (emailError) {
            setError({ emailError: emailError })
            return false
        } else {
            return true
        }
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const isValid = validateForm()

        setLoading(true) // for render the loading

        if (isValid) {
            // post method to end point
            try {
                await service.login(input.email, input.password)
                console.log(input)

                dispatch(isLogIn()) // set the islogIn to be true on redux store

                setError(initialValidate)

                setLoading(false)

                props.history.push('/')
            } catch (error) {
                alert(error.message)
                console.log(error.message)
            }
        }
    }

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const renderLoginForm = () => {
        return (

            <div className='container vertical-center'>
                <form className='w-100 p-3 login-shadow'>

                    <div className="form-group">
                        <label htmlFor="InputEmail"><strong>Email address</strong></label>
                        <input type="email" onChange = {handleChange} className="form-control" id="InputEmail" aria-describedby="emailHelp" name='email' placeholder='Email address'/>
                        {errorMessage.emailError ? <small id="emailHelp" className="form-text text-danger">{errorMessage.emailError}</small> : null}
                    </div>

                    <div className="form-group">
                        <label htmlFor="InputPassword"><strong>Password</strong></label>
                        <input type="password" onChange = {handleChange} className="form-control" id="InputPassword" name='password' placeholder='Password'/>
                    </div>

                    <button type="submit" className="btn btn-outline-success mr-2" onClick={handleOnSubmit}>Login</button>
                    <Link to='/register' activeStyle={{ color: 'white' }}><button type="submit" className="btn btn-outline-primary">Sign Up</button></Link>
                </form>
            </div>

        )
    }

    const renderLoading = () => {
        return (
            <div className='loading'>
                <Spinner type="grow" color="primary" style={{ width: '3rem', height: '3rem' }} />
                <Spinner type="grow" color="secondary" style={{ width: '3rem', height: '3rem' }} />
                <Spinner type="grow" color="success" style={{ width: '3rem', height: '3rem' }} />
                <Spinner type="grow" color="danger" style={{ width: '3rem', height: '3rem' }} />
                <Spinner type="grow" color="warning" style={{ width: '3rem', height: '3rem' }} />
                <Spinner type="grow" color="info" style={{ width: '3rem', height: '3rem' }} />
                <Spinner type="grow" color="dark" style={{ width: '3rem', height: '3rem' }} />
            </div>
        )
    }
    return (
        <div>
            <Nav/>
            {loading ? renderLoading() : renderLoginForm()}
        </div>
    )
}
export default LogInPage
