import React,{useState,useEffect} from 'react';

const SearchResultItems = ({searchResult}) =>{

    
    
    return(

        <div className='mt-4'>

            <div className='container'>
            
                <div className='row'>


                    {
                    searchResult && searchResult.map(idx=>(

                                <div className='col-md-12'>
                                    <div className='card'>
                                        <div className='card-body'>

                                            <h5 className='card-title'>{idx.title}</h5>
                                            <p className='card-text'>{idx.content.detail1}</p>
                                            <p className="card-text"><small class="text-muted">Like {idx.likeInfo.count} Comment {idx.commentInfo.count}</small></p>

                                        </div>

                                    </div>
                                </div>
                        

                    ))
                    
                    }

                </div>

            </div>
        </div>
    )
}
export default SearchResultItems;