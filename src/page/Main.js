import React,{useEffect,useState , Fragment} from 'react';

import {Link} from 'react-router-dom';

import Nav from '../component/common/Nav';

import Subscribe from '../component/common/Subscribe';

import FeedService from '../service/FeedService';

import moment from 'moment';

import Loading from '../component/common/Loading';

import RenderFeed from '../component/renderFeed/RenderFeed';

import Pagination from '../component/pagination/Pagination';

const Main = (props) =>{
    const feedService = new FeedService();

    const [newFeed, setNewFeed] = useState([]);

    const [topFeed, setTopFeed] = useState([]);

    const [newFeedPage,setNewFeedPage] = useState(1);

    const [topFeedPage,setTopFeedPage] = useState(1);

    const [isLoading,setIsLoading] = useState(true);

    
    useEffect(()=>{
        

        const fetch= async() =>{
            const topFeed = await feedService.getFeedTop(topFeedPage,6);
            setTopFeed(topFeed.posts);

            const newFeed = await feedService.getFeedNew(newFeedPage,6)
            setNewFeed(newFeed.posts);

            setIsLoading(false);
        }

        fetch();
    
    },[])
   
   return(
       <Fragment>
           <Nav {...props}/>
           {isLoading? 
                <Loading/>
                :
                <Fragment>
                    {topFeed.length!==0? <RenderFeed feed={topFeed} header={'Hot'}/>:null}
                    {newFeed.length!==0? <RenderFeed feed={newFeed} header={'Feed'}/>:null}
                    <Pagination page={newFeedPage} setPage={setNewFeedPage}/>
                    <Subscribe/>
                </Fragment>
            }
       </Fragment>
   )
}
export default Main
