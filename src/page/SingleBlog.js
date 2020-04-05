import React, { useEffect, useState } from 'react'

import Nav from '../component/common/Nav'

import PostService from '../service/PostService'

import moment from 'moment';

import {Link} from 'react-router-dom';

import FeedService from '../service/FeedService';

import likeIcon from '../media/thumbs-up.png';

import likeIconFill from '../media/thumbs-up-hand-symbol.png';

import {useSelector,useDispatch} from'react-redux';

import LeaveComment from '../component/common/LeaveComment';

const SingleBlog = (props) => {
    
    const mockUrl1 = 'https://images.unsplash.com/photo-1575438481582-b971d5a00fb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'

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
    

    const singleBlogLike = async() =>{
        
        if(detail._id === userInfo._id){
            return ;
        }else if(wasLike){
            await postService.unlikePost(detail._id);
            setWasLike(!wasLike);
            const data = await postService.getPost(props.match.params.id);
            setDetail(data.post);
        }else{ 
        await postService.likePost(detail._id);
        setWasLike(!wasLike);
        const data = await postService.getPost(props.match.params.id);
        setDetail(data.post);
        }
        
    }
    
    const renderCoverImg = () => {

        return (
           
           <div className="site-cover site-cover-sm same-height overlay single-page mb-5" style={{ backgroundImage: `url(${mockUrl1})` }}>
                <div className="container">
                    <div className="row same-height justify-content-center">
                        <div className="col-md-12 col-lg-10">
                            <div className="post-entry text-center">
                                <span className="post-category text-white bg-success mb-3">{detail.category}</span>
                                <h1 className="mb-4">{detail.title}</h1>
                                <div className="post-meta align-items-center text-center">
                                    <figure className="author-figure mb-0 mr-3 d-inline-block"><img src={mockUserImg} alt="Image" className="img-fluid"/></figure>
                                    <span className="d-inline-block mt-1">{detail.creator.displayName}</span>
                                    <span>&nbsp;-&nbsp; {moment(detail.createdAt).format('MMM Do YY')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const renderMainSection = () => {
        
            return(
           

                        <div className="col-md-12 col-lg-8 main-content">
                        
                            <div className="post-content-body">
                                
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium nam quas inventore, ut iure iste modi eos adipisci ad ea itaque labore earum autem nobis et numquam, minima eius. Nam eius, non unde ut aut sunt eveniet rerum repellendus porro.</p>
                                <p>Sint ab voluptates itaque, ipsum porro qui obcaecati cumque quas sit vel. Voluptatum provident id quis quo. Eveniet maiores perferendis officia veniam est laborum, expedita fuga doloribus natus repellendus dolorem ab similique sint eius cupiditate necessitatibus, magni nesciunt ex eos.</p>
                                <p>Quis eius aspernatur, eaque culpa cumque reiciendis, nobis at earum assumenda similique ut? Aperiam vel aut, ex exercitationem eos consequuntur eaque culpa totam, deserunt, aspernatur quae eveniet hic provident ullam tempora error repudiandae sapiente illum rerum itaque voluptatem. Commodi, sequi.</p>
                                
                                <div className="row mb-5 mt-5">
                            
                                    <div className="col-md-12 mb-4">
                                
                                        <img src="images/img_1.jpg" alt="Image placeholder" className="img-fluid rounded"/>
                           
                                    </div>

                                    <div className="col-md-6 mb-4">
                                        
                                        <img src="images/img_2.jpg" alt="Image placeholder" className="img-fluid rounded"/>
                                    
                                    </div>
                            
                                    <div className="col-md-6 mb-4">
                                        
                                        <img src="images/img_3.jpg" alt="Image placeholder" className="img-fluid rounded"/>
                                    
                                    </div>
                                </div>

                                <p>{}</p>
                            
                            </div>
                        </div>
                  
            )
    }

    const renderCategoriesAndLike = () =>{
        return(

                <div className="pt-5">

                    <div style={{display:'inline-block'}}>

                        <p>Categories: 
                            
                            <Link to="#">{detail && detail.category}
                            </Link>

                            {wasLike? 
                            <img src={likeIconFill} alt='LikeFill' style={{width: '1rem', marginLeft:'10px'}} onClick={singleBlogLike} className='hvr-float'/>
                            :
                            <img src={likeIcon} alt='Like' style={{width: '1rem', marginLeft:'10px'}} onClick={()=> isLogIn? singleBlogLike() : toRegister()} className='hvr-float'/>
                            }

                            <span>({detail?  detail.likeInfo.count : null})</span>
                        
                        </p>

                    </div>
                   
                </div>

        )
    }

    const renderComment = () =>{
        return(
           
            <div className='pt-5'>
                    
                    <h3 class="mb-5">{detail && detail.commentInfo.count} Comments</h3>
                        <ul className='comment-list'>
                            { detail&& detail.commentInfo.count > 0?
                             
                                detail.commentInfo.comments.map(idx=>
                                    <li className="comment">
                                        
                                        <div className="vcard">
                                            <img src="https://siamrath.co.th/files/styles/1140/public/img/20190811/1bebd9268892945e74b2ba669a881b7071250b816cb97cc053111463718ccb5c.jpg?itok=kRopIDa0" alt="user display image"/>
                                        </div>

                                        <div className="comment-body">
                                        <h3>user display name</h3>
                                            <div className="meta">January 9, 2018 at 2:21pm</div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                        </div>
                                    </li>
                                    )

                                    :
                                    
                                    null
                             
                             }
                        
                        </ul>
            </div>
        )
    }

   

    const renderSidebarProfile = () =>{
        
        return( 
            
            detail&& // wait for detail to finish fetch before render content
   
                <div className="sidebar-box">
                    
                    <div className="bio text-center">
                        
                        <img src="https://siamrath.co.th/files/styles/1140/public/img/20190811/1bebd9268892945e74b2ba669a881b7071250b816cb97cc053111463718ccb5c.jpg?itok=kRopIDa0" alt="blog owner image" className="img-fluid mb-5"/>
                            
                            <div className="bio-body">
                                <h2>{detail.creator.displayName}</h2>
                                <p className="mb-4">For user story</p>
                            </div>
                    
                    </div>
                
                </div>
            
          

        )
    }

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

  

    return (
        <div>
            <Nav/>
            {detail &&renderCoverImg()}
            <section  className="site-section py-lg">
                
                <div  className="container">
                    
                    <div className="row blog-entries element-animate">
                        
                        {renderMainSection()}
                        
                        <div className='col-md-12 col-lg-4 sidebar'>
                            {renderSidebarProfile()}
                            {renderSidebarPopularPost()}
                            {renderSidebarCategory()}
                        </div>
                    
                    </div>
                    
                    {renderCategoriesAndLike()}
                    {renderComment()}
                    <LeaveComment _id={props.match.params.id} {...props}/>
                    
                </div>
                
            </section>
           


        </div>
    )
}
export default SingleBlog;
