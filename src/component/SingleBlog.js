import React, { useEffect, useState } from 'react'
import Nav from './common/Nav'
import PostService from '../service/PostService'
import moment from 'moment';
import {Link} from 'react-router-dom';
const SingleBlog = (props) => {
    const mockUrl1 = 'https://images.unsplash.com/photo-1575438481582-b971d5a00fb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'

    const mockUrl2 = 'https://images.unsplash.com/photo-1575403071054-56585330a0ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80'

    const mockUrl3 = 'https://images.unsplash.com/photo-1575410226902-dcfe1279f1a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'

    const mockUrl4 = 'https://images.unsplash.com/photo-1575399545768-5f1840c1312d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80'

    const mockUserImg = 'https://images.unsplash.com/photo-1575410236084-db61fcf7fea8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
    
    const postService = new PostService();

    const [detail, setDetail] = useState('');

    
    useEffect(()=>{
        const fetch = async()=>{
            const data = await postService.getPost(props.match.params.id);
            setDetail(data.post);
        }
        fetch();
    },[])
    
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
                <div className="container ">
        
                    <div className="row blog-entries element-animate">

                        <div className="col-md-12 col-lg-8 main-content">
                        
                            <div className="post-content-body">
                                
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium nam quas inventore, ut iure iste modi eos adipisci ad ea itaque labore earum autem nobis et numquam, minima eius. Nam eius, non unde ut aut sunt eveniet rerum repellendus porro.</p>
                                <p>Sint ab voluptates itaque, ipsum porro qui obcaecati cumque quas sit vel. Voluptatum provident id quis quo. Eveniet maiores perferendis officia veniam est laborum, expedita fuga doloribus natus repellendus dolorem ab similique sint eius cupiditate necessitatibus, magni nesciunt ex eos.</p>
                                <p>Quis eius aspernatur, eaque culpa cumque reiciendis, nobis at earum assumenda similique ut? Aperiam vel aut, ex exercitationem eos consequuntur eaque culpa totam, deserunt, aspernatur quae eveniet hic provident ullam tempora error repudiandae sapiente illum rerum itaque voluptatem. Commodi, sequi.</p>
                                
                                <div className="row mb-5 mt-5">
                            
                                    <div className="col-md-12 mb-4">
                                
                                        <img src="images/img_1.jpg" alt="Image placeholder" class="img-fluid rounded"/>
                           
                                    </div>

                                    <div class="col-md-6 mb-4">
                                        
                                        <img src="images/img_2.jpg" alt="Image placeholder" class="img-fluid rounded"/>
                                    
                                    </div>
                            
                                    <div class="col-md-6 mb-4">
                                        
                                        <img src="images/img_3.jpg" alt="Image placeholder" class="img-fluid rounded"/>
                                    
                                    </div>
                                </div>

                                <p>Quibusdam autem, quas molestias recusandae aperiam molestiae modi qui ipsam vel. Placeat tenetur veritatis tempore quos impedit dicta, error autem, quae sint inventore ipsa quidem. Quo voluptate quisquam reiciendis, minus, animi minima eum officia doloremque repellat eos, odio doloribus cum.</p>
                                <p>Temporibus quo dolore veritatis doloribus delectus dolores perspiciatis recusandae ducimus, nisi quod, incidunt ut quaerat, magnam cupiditate. Aut, laboriosam magnam, nobis dolore fugiat impedit necessitatibus nisi cupiditate, quas repellat itaque molestias sit libero voluptas eveniet omnis illo ullam dolorem minima.</p>
                                <p>Porro amet accusantium libero fugit totam, deserunt ipsa, dolorem, vero expedita illo similique saepe nisi deleniti. Cumque, laboriosam, porro! Facilis voluptatem sequi nulla quidem, provident eius quos pariatur maxime sapiente illo nostrum quibusdam aliquid fugiat! Earum quod fuga id officia.</p>
                                <p>Illo magnam at dolore ad enim fugiat ut maxime facilis autem, nulla cumque quis commodi eos nisi unde soluta, ipsa eius aspernatur sint atque! Nihil, eveniet illo ea, mollitia fuga accusamus dolor dolorem perspiciatis rerum hic, consectetur error rem aspernatur!</p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus magni explicabo id molestiae, minima quas assumenda consectetur, nobis neque rem, incidunt quam tempore perferendis provident obcaecati sapiente, animi vel expedita omnis quae ipsa! Obcaecati eligendi sed odio labore vero reiciendis facere accusamus molestias eaque impedit, consequuntur quae fuga vitae fugit?</p>
                            
                            </div>
                        </div>
                    </div>
                </div>
            )
    }

    const renderCategories = () =>{
        return(

            <div className='container'>

                <div className="pt-5">

                    <p>Categories:  <Link to="#">{detail && detail.category}</Link></p>
                
                </div>
            
            </div>
    
        )
    }
    return (
        <div>
            <Nav/>
            {detail &&renderCoverImg()}
            {renderMainSection()}
            {renderCategories()}


        </div>
    )
}
export default SingleBlog
