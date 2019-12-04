import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Fade} from 'reactstrap';
import '../../style/Nav.css';
import Search from '../../media/search.png';
const Nav = () => {
    const [openSearch,setOpenSearch] = useState(false);
    
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