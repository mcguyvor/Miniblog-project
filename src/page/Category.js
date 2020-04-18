import React, { useState, useEffect, Fragment } from 'react';

import FeedService from '../service/FeedService';

import Nav from '../component/common/Nav';

import CategoryItems from '../component/categoryItems/CategoryItem';

const Category = (props) =>{

    const [items,setItems] = useState('');
    
    const categoryName = props.match.params.category;

    const feedService = new FeedService();
    
    useEffect(()=>{
        const fetchItem =async()=>{
            const data = await feedService.getFeedNew(1,20,categoryName);
            
            setItems(data.posts);
            console.log('work')
        }
        fetchItem();
    }
    ,[categoryName]);
    
    return(
        <Fragment>
            <Nav/>
            {items &&<CategoryItems items={items} categoryName={categoryName}/>}
        </Fragment>
    );
}
export default Category;