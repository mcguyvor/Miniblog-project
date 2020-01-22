import React,{useState,useEffect} from 'react';
import FeedService from '../service/FeedService';
import Nav from './common/Nav';
import Subscribe from './common/Subscribe';
import SearchResultItems from './SearchResultItems';
import {Link} from 'react-router-dom';
const SearchResult = (props) =>{

    const [searchResult, setSearchResult] = useState('');

    const service = new FeedService();
    useEffect(()=>{

        const fetch = async() =>{
            const data = await service.searchFeed(props.match.params.tech,1,20);
            setSearchResult(data.posts);
        }
        
        fetch(); 
        console.log('In search result',props.match.params.tech)
        

    },[]);

    
    return(

        <div>
            <Nav/>
            <SearchResultItems searchResult={searchResult}/>
            <Subscribe/>
        </div>
    )
}
export default SearchResult;