import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import './search-result-items.scss';

const SearchResultItems = ({searchResult,searchKey}) =>{
    const defaultThumbnail = 'https://www.helpscout.com/static/d1eb94dacf10b3fea085c4ef75bf1546/af747/september-2019-release-notes.webp';
    
        return(
        <Fragment>
            <div className='container' style={{marginTop:'70px'}}>
                <div className='d-flex justify-content-start'>
                    <h2 className='title mb-4'>{`You search for ${searchKey}`}</h2>
                </div>
                {searchResult.map(item=>{
                        const{title,content,createdAt,_id,creator} = item;
                        const {detail1} = content;
                        const {displayName} = creator;
                        const img = item.content.imgUrl1? item.content.imgUrl1: defaultThumbnail;
                        
                            return(
                            <Link to ={`/article/${_id}`} className='link'>
                                <div className='media p-2 mb-2 shadow-sm bg-white rounded'>
                                    <img className="align-self-start mr-3 item-img" src={img} alt='blog-thumbnail' />
                                    <div className="media-body">
                                        <h5 className="mt-0">{title}</h5>
                                        <p>{detail1.length>100? `${detail1.slice(0,100)}...`: detail1}</p>
                                        <div className='mb-0 align-self-end'>
                                        <p className="text-muted mb-0"><small>{moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}</small></p>
                                        <p className="text-muted mb-2"><small>{`By ${displayName}`}</small></p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            
                            )
                    })}
            </div>
        </Fragment>
        )
    }

export default SearchResultItems;