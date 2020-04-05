import React from 'react';
import {Link} from 'react-router-dom';

const SearchResultItems = ({searchResult}) =>{

   
    
    return(

        <div className='mt-5 '>

            <div className='container'>
            
                <div className='row'>


                    {
                    searchResult && searchResult.map(idx=>(

                       
                                <div className='col-md-12'>
                                     <Link to={`/article/${idx._id}`}>
                                        <div className='card mb-1'>
                                            <div className='card-body'>

                                                <h5 className='card-title'>{idx.title}</h5>
                                                <p className='card-text text-dark'>{idx.content.detail1}</p>
                                                <p className="card-text text-muted"><small class="text-muted">Like {idx.likeInfo.count} Comment {idx.commentInfo.count}</small></p>

                                            </div>

                                        </div>
                                    </Link>
                                </div>
                      

                    ))
                    
                    }

                </div>

            </div>
        </div>
    )
}
export default SearchResultItems;