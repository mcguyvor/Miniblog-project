import React from 'react';

import { FacebookIcon, TwitterIcon} from 'react-share';

import './renderInfo-blog.scss';

import mockData from './mockData';

const RenderInfoBlog = ({detail, url}) =>{

    const {content} = detail;

    const {detail1,detail2,detail3,detail4,imgUrl1,imgUrl2,imgUrl3,imgUrl4} = content;

    return(
        <div className='container'>
           
                <div className='social-share'>
                    <ul >
                        <li><FacebookIcon size={32} round={true} url={url}/></li>
                        <li><TwitterIcon size={32} round={true}/></li>
                    </ul>

                </div>
                <div className='content'>
                    <p>{detail1.length>100? detail1:mockData}</p>
                    <img src={imgUrl1}/>
                    <p>{detail2==undefined? mockData:detail2.length>100? detail1:mockData}</p>
                    <img src={imgUrl2}/>
                    <p>{detail3==undefined? mockData:detail3.length>100? detail1:mockData}</p>
                    <img src={imgUrl3}/>
                    <p>{detail4==undefined? mockData:detail4.length>100? detail1:mockData}</p>
                    <img src={imgUrl4}/>
                </div>
               
              
            </div>  
        
    )
}

export default RenderInfoBlog;