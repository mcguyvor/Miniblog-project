import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {Fade} from 'reactstrap';
import '../../style/Nav.css';
import Search from '../../media/search.png';
import LoginIcon from '../../media/user.png';
import UserLogInIcon from '../../media/man-user.png';
import UserLogOutIcon from '../../media/logout.png';
import AddBlogIcon from '../../media/add.png';
import Popover from 'react-tiny-popover';
import {userInfo} from '../../action/index';
import UserSessionService from '../../service/UserSessionService';

const Nav = (props) => {

    //const logIn = props.isLogIn;

    const logIn = useSelector(state=>state.isLogIn)

    const user = useSelector(state=>state.userInfo)


    const [openSearch,setOpenSearch] = useState(false);

    const [isLogIn,setIsLogIn] = useState(logIn);

    const [isPopOverOpen,setIsPopOverOpen] = useState(false);


    const service = new UserSessionService();

    const dispatch = useDispatch();

    /*useEffect(()=>{
        setIsLogIn(props.isLogIn)
    },[props.isLogIn])*/

    useEffect(()=>{
        const getUserInfo =async()=>{
            try{
                const profile = await service.getProfile();
                dispatch(userInfo(profile));
            }catch(error){
                console.log(error.message)
            }
        }
     getUserInfo(); 
    }
    
    ,[])

    const renderIsLogInIcon = () =>{
        if(user){
        return(
            <Popover
                isOpen={isPopOverOpen} // check the login state
                position={'bottom'} // preferred position
                content={(

                        <ul className="list-group list-group-flush">
                            
                            <li className='list-group-item list-group-item-action'><Link style={{color:'black'}}>{user.user.displayName}</Link></li>
                            <li className='list-group-item list-group-item-action'><Link to= '/createblog' style={{color:'black'}}><img src={AddBlogIcon} className='mr-2' style={{width:'1rem'}}/>Add blog</Link></li>
                            <li className='list-group-item list-group-item-action'><Link onClick={()=> setIsLogIn(false)} style={{color:'black'}}><img src={UserLogOutIcon} className='mr-2' style={{width:'1rem'}}/>Log Out</Link></li>

                        </ul>
                        
                )}
            >
                {// the user already log in icon 
                }
                <Link className='nav-link nav-link-color-black mr-2' onClick={()=> setIsPopOverOpen(!isPopOverOpen)}>
                    <img src = {UserLogInIcon} style={{width:'1.5rem'}}/>
                </Link>
                
            </Popover>
            )
    }
}
    
    const renderNavBar = () =>{
        
        return(
                <nav className='navbar navbar-expand-lg navbar-light '>
                    
                    <Link to ='/' className='navbar-brand nav-link nav-link-color-black'>Blog brand</Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarToggle">
                        <ul className='navbar-nav ml-auto mt-lg-0 mr-5'>
                            <li className='nav-item'><Link to='/'  className='nav-link nav-link-color-black mr-2'><strong>Technology</strong></Link></li>
                            <li className='nav-item'><Link to='/'  className='nav-link nav-link-color-black mr-2'><strong>Finance</strong></Link></li>
                            <li className='nav-item'><Link to='/'  className='nav-link nav-link-color-black mr-2'><strong>Industrial</strong></Link></li>
                            <li className='nav-item'><Link to='/'  className='nav-link nav-link-color-black mr-2'><strong>Sport</strong></Link></li>
                            <li className='nav-item'><Link className='nav-link nav-link-color-black mr-2' onClick={()=> setOpenSearch(true)}><img src={Search} style={{width:'1rem'}}/></Link></li>
                            
                            <li className='nav-item'>{isLogIn? renderIsLogInIcon() : <Link to = '/login' className='nav-link nav-link-color-black mr-2'><img src={LoginIcon} style={{width:'1.5rem'}}/></Link>}</li>
                        
                        </ul>
                    </div>
                </nav>
            )
    }

    const renderNavSearch = () =>{
        
        return(
                <Fade in={openSearch} className='mt-3' >
                    <form>
                        <div className="form-group row ml-4">
                            <div className="col-sm-10 col-10">
                                <input type="text"  className="form-control-plaintext" id="searchbar" placeholder='Type and enter'/>
                            </div>
                            <div className='col-sm-2 col-2 pt-2'>
                                <button onClick ={()=>setOpenSearch(!openSearch)}><i className="fa fa-times button" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </form>
                </Fade>
            
        )
    }

    return(
        <div>
            {openSearch? renderNavSearch(): renderNavBar()}
        </div>
    );
}
export default Nav ;