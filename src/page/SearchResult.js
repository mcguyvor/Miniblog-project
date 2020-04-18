import React,{useState,useEffect} from 'react';
import FeedService from '../service/FeedService';
import Nav from '../component/common/Nav';
import Subscribe from '../component/common/Subscribe';
import SearchResultItems from '../component/searchResultItems/SearchResultItems';
import Loaded from '../component/searchResultItems/Loaded';

const SearchResult = (props) =>{

    const [searchResult, setSearchResult] = useState('');

    const searchKey = props.match.params.tech;

    const [isLoading,setIsLoading] = useState(true);


    const service = new FeedService();
    useEffect(()=>{

        const fetch = async() =>{
            const data = await service.searchFeed(searchKey,1,20);
            setSearchResult(data.posts);
            setIsLoading(false)
        }
        
        fetch(); 
        return ()=> fetch();
    },[searchKey]);

    
    return(

        <div>
            <Nav {...props}/>
           {isLoading? <Loaded/> : 
           <SearchResultItems searchResult={searchResult} searchKey={searchKey}/>
           }
            <Subscribe/>
        </div>
    )
}
export default SearchResult;