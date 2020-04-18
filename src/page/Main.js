import React,{useEffect,useState , Fragment} from 'react';


import Nav from '../component/common/Nav';

import Subscribe from '../component/common/Subscribe';

import FeedService from '../service/FeedService';

import Loading from '../component/common/Loading';

import RenderFeed from '../component/renderFeed/RenderFeed';

import Pagination from '../component/pagination/Pagination';

import Loaded from '../component/skeleton/Loaded';

const Main = (props) =>{
    const feedService = new FeedService();

    const [newFeed, setNewFeed] = useState([]);

    const [topFeed, setTopFeed] = useState([]);

    const [topFeedPage,setTopFeedPage] = useState(1);

    const [newFeedPage,setNewFeedPage] = useState(1);

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
           <div style={{backgroundColor:'white'}}>
            <Nav {...props}/>
            {isLoading? 
                    <Loaded marginTop={'70px'}/>
                    :
                    <Fragment>
                        {topFeed.length!==0? <RenderFeed feed={topFeed} header={'Hot'} marginTop={'70px'}/>:null}
                        {newFeed.length!==0? <RenderFeed feed={newFeed} header={'Feed'}/>:null}
                        <Pagination page={newFeedPage} setPage={setNewFeedPage}/>
                        <Subscribe/>
                    </Fragment>
                }
             </div>
   )
}
export default Main
