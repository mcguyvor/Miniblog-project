import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../style/Login.css';
import UserSessionService from '../service/UserSessionService';
const LogInPage = (props) =>{

    const initialInput = {email:'',password:''}

    const [input,setInput] = useState(initialInput);

    const initialValidate= {emailError :'', passwordError:''};

    const [errorMessage,setError] =useState(initialValidate);

    const service = new UserSessionService();

    const validateForm = () =>{
        let emailError ='';
        const email =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!input.email){
            emailError ='Please enter your email address';
        }
        if(!input.email.match(email)){
            emailError = 'Please enter the correct email format'; 
        }
        if(emailError){
            setError({emailError:emailError});
            return false;
        }else{
            return true;
        }
    }

    const handleOnSubmit = async (e) =>{
        e.preventDefault();
        const isValid = validateForm();
        if(isValid){
            // post method to end point
            try{
            await service.login(input.email,input.password)
            console.log(input);
            setError(initialValidate);
            props.history.push('/');      
            }catch(error){
                alert(error.message)
                console.log(error.message)
            } 
        }
    }

    const handleChange  = (e) =>{
        setInput({...input,[e.target.name]:e.target.value});
    }


    const renderLoginForm = () =>{
        return(
            
                    <div className='container vertical-center'>
                        <form className='w-100 p-3 login-shadow'>
                            
                            <div className="form-group">
                                <label for="InputEmail"><strong>Email address</strong></label>
                                <input type="email" onChange = {handleChange} className="form-control" id="InputEmail" aria-describedby="emailHelp" name='email' placeholder='Email address'/>
                                {errorMessage.emailError ?<small id="emailHelp" className="form-text text-danger">{errorMessage.emailError}</small> : null}
                            </div>
                            
                            <div className="form-group">
                                <label for="InputPassword"><strong>Password</strong></label>
                                <input type="password" onChange = {handleChange} className="form-control" id="InputPassword" name='password' placeholder='Password'/>
                            </div>
                            
                            <button type="submit" className="btn btn-outline-success mr-2" onClick={handleOnSubmit}>Login</button>
                            <Link to='/register' activeStyle={{ color: 'white' }}><button type="submit" className="btn btn-outline-primary">Sign In</button></Link>
                        </form>
                    </div>
                
        );
    }
    return(
        <div>
            {renderLoginForm()}
        </div>
    );
}
export default LogInPage;