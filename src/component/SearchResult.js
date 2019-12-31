import React,{useState,useEffect} from 'react';
import FeedService from '../service/FeedService';
import Nav from './common/Nav';
import Subscribe from './common/Subscribe';
import {Link} from 'react-router-dom';
const SearchResult = (props) =>{

    const [searchResult, setSearchResult] = useState('');

    const service = new FeedService();
    useEffect(()=>{

        const fetch = async() =>{
            const data = await service.searchFeed(props.match.params.searchKey,1,20);
            setSearchResult(data);
        }
        
        fetch(); 

    },[]);

    

    return(

        <div>
            <Nav/>
            <Subscribe/>
        </div>
    )
}
export default SearchResult;