import React,{useState,useEffect} from 'react';
import FeedService from '../service/FeedService';
import Nav from './common/Nav';
import Subscribe from './common/Subscribe';
import SearchResultItems from './SearchResultItems';
import {Link} from 'react-router-dom';
import Loading from './common/Loading';
const SearchResult = (props) =>{

    const [searchResult, setSearchResult] = useState('');

    const [isLoading,setIsLoading] = useState(true);


    const service = new FeedService();
    useEffect(()=>{

        const fetch = async() =>{
            const data = await service.searchFeed(props.match.params.tech,1,20);
            setSearchResult(data.posts);
            setIsLoading(false)
        }
        
        fetch(); 
        console.log('In search result',props.match.params.tech)
        console.log('props in search result', props.history.push);
        console.log('test',searchResult)

        return ()=> fetch();
    },[props.match.params.tech]);

    
    return(

        <div>
            <Nav {...props}/>
           {isLoading? <Loading/> : 
           <SearchResultItems searchResult={searchResult}/>
           }
            <Subscribe/>
        </div>
    )
}
export default SearchResult;