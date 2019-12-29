import React, { useEffect, useState } from 'react'
import Nav from './common/Nav'
import PostService from '../service/PostService'
import moment from 'moment';
import {Link} from 'react-router-dom';
import FeedService from '../service/FeedService';

const SingleBlog = (props) => {
    const mockUrl1 = 'https://images.unsplash.com/photo-1575438481582-b971d5a00fb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'

    const mockUrl2 = 'https://images.unsplash.com/photo-1575403071054-56585330a0ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80'

    const mockUrl3 = 'https://images.unsplash.com/photo-1575410226902-dcfe1279f1a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'

    const mockUrl4 = 'https://images.unsplash.com/photo-1575399545768-5f1840c1312d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80'

    const mockUserImg = 'https://images.unsplash.com/photo-1575410236084-db61fcf7fea8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
    
    const postService = new PostService();

    const [detail, setDetail] = useState('');

    const [popularPost,setPopularPost] = useState('');

    const [category,setCategory] = useState('');

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

            setCategory({...category,
                technology: categoryTechFetch.posts.length,
                finance: categoryFinanceFetch.posts.length,
                industrial: categoryIndustrialFetch.posts.length,
                sport: categorySportFetch.posts.length,

            })
        }
        fetch();
    },
    [props.match.params]) // rerender when params ID change

    
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

    const renderCategories = () =>{
        return(

                <div className="pt-5">

                    <p>Categories:  <Link to="#">{detail && detail.category}</Link></p>
                
                </div>

        )
    }

    const renderSidebarProfile = () =>{
        
        return( 
            
            detail&& // wait for detail to finish fetch before render content
   
                <div className="sidebar-box">
                    
                    <div className="bio text-center">
                        
                        <img src="https://siamrath.co.th/files/styles/1140/public/img/20190811/1bebd9268892945e74b2ba669a881b7071250b816cb97cc053111463718ccb5c.jpg?itok=kRopIDa0" alt="Image Placeholder" className="img-fluid mb-5"/>
                            
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

    const renderLike = () =>{
        return(
            
            <div className='sidebar-box'>
                <img src={} alt='Like'/>
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
                    {renderCategories()}
                </div>
                
            </section>
           


        </div>
    )
}
export default SingleBlog
