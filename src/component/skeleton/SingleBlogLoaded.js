import React, { Fragment } from 'react';

import Skeleton from 'react-loading-skeleton';

import '../renderInfoBlog/renderInfo-blog.scss';

const Loaded = () =>(
    <Fragment>
        <div classNmae='mb-4'>
            <Skeleton height={410} width={2000}/>
        </div>
        <div className='container'>
            <div className='content'>
                <Skeleton height={1000} width={700}/>
            </div>
        </div>
    </Fragment>
    
)

export default Loaded ;