import React, { useEffect, useState, Fragment } from 'react'

import Nav from '../component/common/Nav'

import PostService from '../service/PostService'

import moment from 'moment';

import {Link} from 'react-router-dom';

import FeedService from '../service/FeedService';

import {useSelector} from'react-redux';

import LeaveComment from '../component/common/LeaveComment';

import RenderCover from '../component/renderCoverImage/RenderCover';

import RenderInfoBlog from '../component/renderInfoBlog/renderInfoBlog';

import CategoryLike from '../component/renderCategoriesAndLike/CategoryLike';

import Comment from '../component/comment/Comment';

import Subscribe from '../component/common/Subscribe';


const SingleBlog = (props) => {
    
    const mockUrl1 = 'https://www.helpscout.com/static/d1eb94dacf10b3fea085c4ef75bf1546/72a2d/september-2019-release-notes.webp'

    const mockUserImg = 'https://images.unsplash.com/photo-1575410236084-db61fcf7fea8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
    
    const postService = new PostService();

    const [detail, setDetail] = useState('');

    const [popularPost,setPopularPost] = useState('');

    const [category,setCategory] = useState('');

    const isLogIn = useSelector(state => state.isLogIn);

    const userInfo = useSelector(state => state.userInfo.user);

    const [wasLike,setWasLike] = useState(false); 

    const [addComment,fetchComment] = useState(false);

    const feedService = new FeedService();

    const blogId = props.match.params.id;


    
    
    useEffect(()=>{
        const fetch = async()=>{
            const data = await postService.getPost(props.match.params.id);
            setDetail(data.post);
            const fetchPopularPost = await feedService.getFeedTop(1,3);
            setPopularPost(fetchPopularPost);

            const categoryTechFetch = await feedService.getFeedNew(1,100,'Technology');
            const categoryFinanceFetch = await feedService.getFeedNew(1,100,'Finance');
            const categoryIndustrialFetch = await feedService.getFeedNew(1,100,'Industrial');
            const categorySportFetch = await feedService.getFeedNew(1,100,'Sport');
            
            fetchComment(false);

            setCategory({...category,
                technology: categoryTechFetch.posts.length,
                finance: categoryFinanceFetch.posts.length,
                industrial: categoryIndustrialFetch.posts.length,
                sport: categorySportFetch.posts.length,

            })
        }
         fetch();
    },
    [props.match.params,addComment]) // rerender when params ID change 


    const toRegister = () =>{
       props.history.push('/login');
    };
    
    const renderSidebarPopularPost = () =>{
        
        return(

            <div className='sidebar-box'>

                <h3 className="heading">Popular Posts</h3>

                <div className="post-entry-sidebar">

                    <ul>
                        
                        {
                           popularPost && popularPost.posts.map( idx=>

                            <li key={idx._id}>
                                    <Link to={`/article/${idx._id}`} >
                                        <img src="images/img_1.jpg" alt="Image placeholder" className="mr-4"/>
                                            <div className="text">

                                                <h4>{idx.title}</h4>

                                                <div className="post-meta">
                                                    <span class="mr-2">{moment(idx.createdAt).format('LL')}</span>
                                                </div>
                                            
                                            </div>
                                    </Link>
                                </li>    
                            )
                        }   

                    </ul>
                
                </div>
            
            </div>
        )
    }

    const renderSidebarCategory = () =>{
        //change a tag to Link when categoy page is finish
        return( category &&
            
            <div className="sidebar-box">
              
              <h3 className="heading">Categories</h3>
              
              <ul className="categories">
               
                <li><a href="#">Technology <span>({category.technology})</span></a></li>
                <li><a href="#">Finance <span>({category.finance})</span></a></li>
                <li><a href="#">Industrial <span>({category.industrial})</span></a></li>
                <li><a href="#">Sport <span>({category.sport})</span></a></li>              
              
              </ul>
            
            </div>
        )
    }

    return(
        <Fragment >
            <Nav/>
            {detail &&
            <Fragment>
                <RenderCover imgBg={mockUrl1} detail={detail} userImg={mockUserImg}/>
                <RenderInfoBlog detail ={detail} url={props.match.params.id}/>
                <CategoryLike wasLike={wasLike} setWasLike={setWasLike} detail={detail} setDetail={setDetail} toRegister={toRegister} isLogIn={isLogIn} userInfo={userInfo} blogId={blogId}/>
                <Comment detail={detail}/>
                <LeaveComment _id={props.match.params.id} {...props} fetchComment={fetchComment}/>
                <Subscribe/>
            </Fragment>
            }               
        </Fragment>
    )
}
export default SingleBlog;
