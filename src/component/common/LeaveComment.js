import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import PostService from '../../service/PostService';
import UserSessionService from '../../service/UserSessionService';
import {isLogIn} from '../../action/index';
import {Modal,Button} from 'react-bootstrap';
const LeaveComment = (props) =>{

    const [input,setInput] = useState('');
   
    const [isLoading, setLoading] = useState(false);

    const [logIn,setLogIn] = useState(false);

    const isLogInState = useSelector(state => state.isLogIn);

    const [comment,setComment] = useState('');

    const [modalShow,setModalShow] = useState(false);

    const dispatch = useDispatch();

    const service = new PostService();

    const userSession = new UserSessionService();

    useEffect(()=>{
        const fetch = ()=>{
            setLogIn(isLogInState);
        }
        fetch();
    },[])
    
    const handleChangeEmailPassWord =(e)=>{
            setInput({...input,
                [e.target.name] : e.target.value
            })
    }
    const handleEmailPassWordSubmit = async(e)=>{
        setLoading(true);
        try{
            e.preventDefault();
            await userSession.login(input.email,input.password);
            setInput('');
            setLoading(false);
            setLogIn(true);
            dispatch(isLogIn());
            setModalShow(false);
        }catch(err){
            alert(err);
            setLoading(false);
        }
    }


    const submitForm = async(e) =>{
            e.preventDefault();
        if(logIn){
            await service.commentPost(props._id,comment);
            setComment('');
        }else{
            setModalShow(true);
            console.log('should show modal',modalShow)
        }
    }

    const handleCommentChange = (e) =>{
        
        setComment(e.target.value);

    }

    const redirect = () =>{
        console.log(props.history);
        props.history.push('/register');
    }

    const renderVerticleModal = (props) =>{
        
        return(
            <Modal
            {...props}
            size='lg'
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={modalShow}
            onHide={()=> setModalShow(false)}
            

            >

                <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Sign Up
                        </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <form onSubmit={handleEmailPassWordSubmit}>
                        <div className='form-group row p-4'>
                            
                            <label htmlFor='email' className="col-sm-1 col-form-label">Email  </label>
                            
                            <div className="col-sm-11">
                                <input className='form-control' name='email' id='email' type='email' onChange={handleChangeEmailPassWord}/>
                            </div>
                               
                        </div>

                        <div className='form-group row p-4'>

                            <label htmlFor='password' className="col-sm-1 col-form-label">Password </label>
                            <div className="col-sm-11">
                                <input name='password' id='password' type='password' onChange={handleChangeEmailPassWord}/>
                            </div>
                        </div>
                    </form>

                </Modal.Body>

                <Modal.Footer>
                    <Button
                        variant="primary"
                        disabled={isLoading}
                        onClick={!isLoading ? handleEmailPassWordSubmit : null}
                        >
                        {isLoading ? 'Loading…' : 'Log In'}
                    </Button>
                    <Button
                        variant="success"
                        disabled={isLoading}
                        onClick={!isLoading ? redirect: null}
                        >
                        {
                        isLoading ? 'Sign In' : 'Sign In'//for future 
                        }   
                    </Button>
                </Modal.Footer>

            </Modal>
        )
    }
   
    return(
            <div className="comment-form-wrap pt-5">
                <h3 className="mb-5">Leave a comment</h3>
                <form className="p-5 bg-light" onSubmit={submitForm}>                
                    
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea value={comment} name="message" id="message" cols="30" rows="10" className="form-control" onChange={handleCommentChange}/>
                    </div>
            
                    <div class="form-group">
                        <input type="submit"  className="btn btn-primary"/>
                    </div>

                </form>

                {renderVerticleModal()}
               
               
        </div>
    )
    
}
export default LeaveComment;