import React from 'react';

import './comment-style.scss';

import moment from 'moment';

const Comment = ({detail}) =>(

    <div className='container'>
        <div className='be-comment-block'>
            <h1 className="comments-title">Comments ({detail.commentInfo.count})</h1>
            {detail.commentInfo.comments.map(comment=>
            <div className="be-comment">
                <div className="be-img-comment">	
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="be-ava-comment"/>   
                </div>
                <div className="be-comment-content">
                    
                        <span className="be-comment-name">
                            <a href="blog-detail-2.html">{comment.creator.displayName}</a>
                            </span>
                        <span className="be-comment-time">
                            <i className="fa fa-clock-o"></i>
                            {moment(comment.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                        </span>

                    <p className="be-comment-text">
                            {comment.content.text}
                    </p>
                </div>
	        </div>
            )}
            </div>
    </div>

)
export default Comment;