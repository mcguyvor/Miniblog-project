import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import Nav from './common/Nav';
import Subscribe from '../component/common/Subscribe';
import '../style/Main.css';
import UserSessionService from '../service/UserSessionService';
import {useDispatch,useSelector} from 'react-redux';
import FeedService from '../service/FeedService';
import moment from 'moment';
import Loading from './common/Loading';
const Main = (props) =>{


    //const [isLogIn,setIsLogin] = useState(false);

    //const [userProfile,setUserProfile] = useState();
    
 
    
    const feedService = new FeedService();

    const [newFeed, setNewFeed] = useState([]);

    const [topFeed, setTopFeed] = useState([]);

    const [newFeedPage,setNewFeedPage] = useState(1);

    const [topFeedPage,setTopFeedPage] = useState(1);

    const [isLoading,setIsLoading] = useState(true);    
    
    useEffect(()=>{
        

        const fetch= async() =>{
            const topFeed = await feedService.getFeedTop(topFeedPage,5);
            setTopFeed(topFeed.posts);

            const newFeed = await feedService.getFeedNew(newFeedPage,6)
            setNewFeed(newFeed.posts);

            setIsLoading(false);
        }

        fetch();
    
    },[])
    

    

    const renderTop = () => {
        return (
            <div className="site-section bg-light">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h2>Hot</h2>
                        </div>
                    </div>

                    {
                    // for part left
                    }
                    <div className="row align-items-stretch retro-layout-2">
                        <div className="col-md-4">
                           {topFeed.slice(0,2).map(idx => {
                                return(
                                    <Link to={`/article/${idx._id}`} className="h-entry mb-30 v-height gradient hvr-float" style={{ backgroundImage: idx.content.imgUrl1? `url(${idx.content.imgUrl1})`:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpiIypWT4z3txyPgoTvVXBTaxUO3nzTCIFKD_hlrwIaS_ZlQsG)' }}>

                                    <div className="text">
                                        <h2>{idx.title}</h2>
                                        <span className="date">{moment(idx.createdAt).format('LL')}</span>
                                    </div>
                                </Link>
                                )
                            })}
                        
                        </div>
                        {
                        // for middle part of hot
                        }
                        <div className="col-md-4">
                            <Link to={`/article/${topFeed[2]._id}`} className="h-entry img-5 h-100 gradient hvr-float" style={{ backgroundImage: topFeed[2].content.imgUrl1? `url(${topFeed[2].content.imgUrl1})`:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpiIypWT4z3txyPgoTvVXBTaxUO3nzTCIFKD_hlrwIaS_ZlQsG)' }}>

                                <div className="text">
                                    <div className="post-categories mb-3">
                                        <span className="post-category bg-danger">Travel</span>
                                        <span className="post-category bg-primary">Food</span>
                                    </div>
                                    { <h2>{topFeed[2].title}</h2>}
                                    <span className="date">{moment(topFeed[2].createdAt).format('LL')}</span>
                                </div>
                            </Link>
                        </div>

                        <div className="col-md-4">

                            {topFeed.slice(3).map(idx=>{

                                        return(
                                            <Link to={`/article/${idx._id}`} className="h-entry mb-30 v-height gradient hvr-float" style={{ backgroundImage: idx.content.imgUrl1? `url(${idx.content.imgUrl1})`:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpiIypWT4z3txyPgoTvVXBTaxUO3nzTCIFKD_hlrwIaS_ZlQsG)' }}>

                                            <div className="text">
                                                <h2>{idx.title}</h2>
                                                <span className="date">{moment(idx.createdAt).format('LL')}</span>
                                            </div>
                                        </Link>
                                        )
                                    }
                                )    
                            }    
                           
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    const renderNewFeed = () => {
        return (
            <div className="site-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h2>Feed</h2>
                        </div>
                    </div>

                    <div className="row">
                        {newFeed.map(idx=>{
                            return(
                                <div className="col-lg-4 mb-4 ">
                                    <div className="entry2 hvr-float">
                                        <a href="single.html"><img src={idx.content.imgUrl1? idx.imgUrl1:'https://images.unsplash.com/photo-1532003885409-ed84d334f6cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'} alt="Image" className="img-fluid rounded"/></a>
                                        <div className="excerpt">
                                            <span className="post-category text-white bg-secondary mb-3">{idx.category}</span>

                                            <h2><a href="single.html">{idx.title}</a></h2>
                                            <div className="post-meta align-items-center text-left clearfix">
                                                <figure className="author-figure mb-0 mr-3 float-left"><img src="https://images.unsplash.com/photo-1562886929-c29b9a76b0a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80}" alt="Image" className="img-fluid"/></figure>
                                                <span className="d-inline-block mt-1">By <a href="#">{idx.creator.displayName}</a></span>
                                                <span>&nbsp;-&nbsp; {moment(idx.createdAt).format('LL')}</span>
                                            </div>

                                            <p>{idx.content.detail1}</p>
                                            <p><a href="#">Read More</a></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
            </div>
        )
    }


    const renderNewFeed2 = () => {
        return (
            <div className="site-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h2>Feed</h2>
                        </div>
                    </div>

                    <div className="card-deck">
                        {newFeed.slice(0,3).map(idx=>{
                            return(
                                <div className="card">
                                <img className="card-img-top" src={idx.content.imgUrl1} alt="Card image cap"/>
                                <div className="card-body">
                                    <span className="post-category text-white bg-secondary mb-3">{idx.category}</span>
                                    <h5 className="card-title">{idx.title.slice(0,100)}</h5>
                                    <p className="card-text">{`${idx.content.detail1.slice(0,100)}...`}</p>
                                    <div className="post-meta align-items-center text-left clearfix">
                                                <span className="d-inline-block mt-1">By <a href="#">{idx.creator.displayName}</a></span>
                                                <span>&nbsp;-&nbsp; {moment(idx.createdAt).format('LL')}</span>
                                            </div>
                                </div>
                                <div className="card-footer">
                                  <Link to={`/article/${idx._id}`}><small>Readmore</small></Link>
                                </div>
                              </div>
                                
                            )
                        })}
                        
                    </div>
                </div>
            </div>
        )
    }




    const renderPagination = () => {
        return (
            <div className='container'>
                <div className='row text-center pt-5 border-top mb-4'>
                    <div className='col-md-12 col-lg-12'>
                        <div className='custom-pagination'>
                            <span>1</span>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#">4</a>
                            <span>...</span>
                            <a href="#">15</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const renderHotOfCategory = () => {
        return (
            <div className="site-section bg-light">

                <div className="container">

                    <div className="row align-items-stretch retro-layout">

                        <div className="col-md-5 order-md-2">
                            <a href="single.html" className="hentry img-1 h-100 gradient hvr-float" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1562886929-c29b9a76b0a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80}' }}>
                                <span className="post-category text-white bg-danger">Technology</span>
                                <div className="text">
                                    <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                                    <span>February 12, 2019</span>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-7">

                            <a href="single.html" className="hentry img-2 v-height mb30 gradient hvr-float" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1562886929-c29b9a76b0a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80}' }}>
                                <span className="post-category text-white bg-success">Finance</span>
                                <div className="text text-sm">
                                    <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                                    <span>February 12, 2019</span>
                                </div>
                            </a>

                            <div className="two-col d-block d-md-flex">
                                <a href="single.html" className="hentry v-height img-2 gradient hvr-float" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1562886929-c29b9a76b0a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80}' }}>
                                    <span className="post-category text-white bg-primary">Sports</span>
                                    <div className="text text-sm">
                                        <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                                        <span>February 12, 2019</span>
                                    </div>
                                </a>
                                <a href="single.html" className="hentry v-height img-2 ml-auto gradient hvr-float" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1562886929-c29b9a76b0a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80}' }}>
                                    <span className="post-category text-white bg-warning">Industrial</span>
                                    <div className="text text-sm">
                                        <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                                        <span>February 12, 2019</span>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
    return (
        <div>
            <Nav {...props}/>
            {isLoading? 
                <Loading/>
                :
                <div>
                {topFeed.length!==0? renderTop():null}
                {newFeed.length!==0? renderNewFeed2():null}
                {renderPagination()}
                {renderHotOfCategory()}
                <Subscribe/>
                </div>
            }
            
            
        </div>
    )
}
export default Main
