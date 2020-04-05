import React from 'react';

import { Link } from 'react-router-dom';

import './renderFeed-style.scss';

import Skeleton from 'react-loading-skeleton';


const renderFeed = (props) => {
    const feed = props.feed;
    const header = props.header
    return (
            <div className="container ">
                <div className="row mb-2">
                    <div className="col-12">
                        <h4>{header}</h4>
                    </div>
                </div>

                <div className="row">
                    {feed.map(feedItem=>{
                        const detail = feedItem.content.detail1.length>100? feedItem.content.detail1.slice(0,100):null;
                        const imgUrl = feedItem.content.imgUrl1? feedItem.content.imgUrl1:'https://www.helpscout.com/static/d1eb94dacf10b3fea085c4ef75bf1546/af747/september-2019-release-notes.webp';
                    return(
                        
                        <div className='col-4'>
                            <div className='card-deck mb-4 '>
                                <Link to={`/article/${feedItem._id}`}>
                                    <div className='card border-light bg-light'>
                                        <img className='card-img-top' src={imgUrl}/>
                                        <div className='card-body text-center pb-2'>
                                            <p className='text-muted font-weight-bold mb-1'>{feedItem.category}</p>
                                            <h5 className='card-title'>{feedItem.title}</h5>
                                                <span className='card-text'>{detail? `${detail}...`: feedItem.content.detail1}</span>
                                        </div>
                                        <div className='footer text-center mb-2'>
                                             <small className='text-muted'>{feedItem.creator.displayName}</small>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                            )
                        }
                        )
                    }
                
                </div>
            </div>
    )
}

export default renderFeed;