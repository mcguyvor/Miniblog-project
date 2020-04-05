import React from 'react';

import './renderCover-style.scss';

import moment from 'moment';

import Skeleton from 'react-loading-skeleton';

const RenderCover = ({imgBg,detail}) =>{


    const {title,creator,createdAt} = detail;

    const {displayName} = creator;

    const userImg = 'https://forbesthailand.com/wp-content/uploads/2019/05/2-bill-gate.jpg';
    return(
        <div className='cover mb-5'>
           <div className='container py-5'>
                <div className='blog-hero'>
                    <div className='blog-hero-info'>
                        <h1>{title || <Skeleton/>}</h1>
                        <div className='user-info'>
                            <div className='user-img'>
                                <img src={userImg} alt={userImg}/>
                            </div>
                            <div classNmae='user-name'>
                            <h4>{displayName}</h4>
                            <span className='text-mute'>{moment(createdAt).format('LL')}</span>
                            </div>
                        </div>
                    </div>
                    <div className='blog-hero-img'>
                        <img src={imgBg} alt={imgBg}/>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default RenderCover;