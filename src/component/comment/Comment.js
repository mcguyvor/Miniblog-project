import React from 'react';

import './comment-style.scss';

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
                            <a href="blog-detail-2.html">User Display Name Boss please provide</a>
                            </span>
                        <span className="be-comment-time">
                            <i className="fa fa-clock-o"></i>
                            May 27, 2015 at 3:14am
                        </span>

                    <p className="be-comment-text">
                        I sassssssss send string maduayyyyyyyyyyy
                    </p>
                </div>
	        </div>
            )}
            </div>
    </div>

)
export default Comment;