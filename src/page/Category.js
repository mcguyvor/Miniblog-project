import React, { useState, useEffect, Fragment } from 'react';

import FeedService from '../service/FeedService';

import Nav from '../component/common/Nav';

import CategoryItems from '../component/categoryItems/CategoryItem';

import Loaded from '../component/categoryItems/Loaded';

const Category = (props) =>{

    const [items,setItems] = useState(null);
    
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
            <Nav {...props}/>
            {items?<CategoryItems items={items} categoryName={categoryName}/>:<Loaded/>}
        </Fragment>
    );
}
export default Category;