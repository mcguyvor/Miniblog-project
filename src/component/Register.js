import React,{useState} from 'react';
const Register = () =>{

    const initialInput = {email:''}

    const [input,setInput] = useState(initialInput);

    const initialValidate= {emailError :'', passwordError:''};

    const [errorMessage,setError] =useState(initialValidate);

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
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        const isValid = validateForm();
        if(isValid){
            // post method to end point
            console.log(input);
            setError(initialValidate);
            e.target.reset();       
        }
    }

    const handleChange  = (e) =>{
        setInput({...input,[e.target.name]:e.target.value});
    }


    const renderRegisterForm = () =>{
        return(
            
                    <div className='container vertical-center'>
                        <form className='w-100' onSubmit={handleOnSubmit}>
                            
                            <div className="form-group">
                                <label for="InputEmail"><strong>Email address</strong></label>
                                <input type="email" onChange = {handleChange} className="form-control" id="InputEmail" aria-describedby="emailHelp" name='email' placeholder='Email address'/>
                                {errorMessage.emailError ?<small id="emailHelp" className="form-text text-danger">{errorMessage.emailError}</small> : null}
                            </div>

                            <div className="form-group">
                                <label for="InputPassword"><strong>Display Name</strong></label>
                                <input type="password" onChange = {handleChange} className="form-control" id="InputPassword" name='password' placeholder='Display name'/>
                            </div>
                            
                            <div className="form-group">
                                <label for="InputPassword"><strong>Password</strong></label>
                                <input type="password" onChange = {handleChange} className="form-control" id="InputPassword" name='password' placeholder='Password'/>
                            </div>

                            
                            <button type="submit" onClick={handleOnSubmit} className="btn btn-outline-primary mr-2">Sign In</button>
                            <button type="submit" className="btn btn-outline-danger"><Link to ='/'>Cancel</Link></button>


                        </form>
                    </div>
                
        );
    }
    return(
        <div>
            {renderRegisterForm()}
        </div>
    );
}
export default Register;