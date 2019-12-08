import React, { useState } from 'react'
import axios from 'axios'
const Subscribe = () => {
    const initialInput = { email: '' }
    const [input, setInput] = useState(initialInput)

    // form validator

    const initialValidate = { emailError: '' }

    const [errorMessage, setError] = useState(initialValidate)

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
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const isValid = validateForm()
        if (isValid) {
            // post method to end point
            console.log(input)
            setError(initialValidate)
            e.target.reset()
        }
    }

    const handleChange = (e) => {
        setInput({ [e.target.name]: e.target.value })
    }

    return (
        <div className="site-section bg-lightx">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-md-5">
                        <div className="subscribe-1 ">
                            <h2>Subscribe to our newsletter</h2>
                            <p className="mb-5">Describe something</p>
                            <form className="d-flex" onSubmit={handleOnSubmit}>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Enter your email address"
                                    name='email'
                                    onChange={handleChange}
                                />
                                <input type="submit" className="btn btn-primary" value="Subscribe"/>
                            </form>
                            <div style={{ fontSize: 12, color: 'red' }}>
                                {errorMessage.emailError}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Subscribe
