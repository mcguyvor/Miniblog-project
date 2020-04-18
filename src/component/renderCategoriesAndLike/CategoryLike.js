import React from 'react';

import { Link } from 'react-router-dom';

import singleBlogLike from './Like.util';

import likeIcon from '../../media/thumbs-up.png';

import likeIconFill from '../../media/thumbs-up-hand-symbol.png';

import './categorylike-style.scss';

const CategoryLike = ({detail,wasLike, setWasLike,setDetail,toRegister,isLogIn, userInfo,blogId}) =>{
    return(

            <div className="container">

                <div style={{display:'inline-block'}}>

                    <p>Categories: 
                        
                        <Link to={`/category/${detail.category}`}>{detail && detail.category}
                        </Link>

                        {wasLike? 
                        <img className='like' src={likeIconFill} alt='LikeFill' style={{width: '1rem', marginLeft:'10px'}} onClick={()=>singleBlogLike(wasLike,setWasLike,detail,setDetail,userInfo,blogId)} className='hvr-float'/>
                        :
                        <img className='like' src={likeIcon} alt='Like' style={{width: '1rem', marginLeft:'10px'}} onClick={()=> isLogIn? singleBlogLike(wasLike,setWasLike,detail,setDetail,userInfo,blogId) : toRegister()} className='hvr-float'/>
                        }

                        <span>({detail?  detail.likeInfo.count : null})</span>
                    
                    </p>

                </div>
               
            </div>

    )
}

export default CategoryLike;