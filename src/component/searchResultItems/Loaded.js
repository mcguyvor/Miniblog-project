import Skeleton from 'react-loading-skeleton';

import React from 'react';

import './search-result-items.scss';




const Loaded = () =>{
    
    const arr =[1,1,1,1,1,1]
    return(
    <div className='container' style={{marginTop:'70px'}}>
        <div className='d-flex justify-content-start'>
                <Skeleton width={310} height={37}/>
               
        </div>
        {arr.map(idx=>(
                    <div className='media p-2 mb-2 shadow-sm bg-white rounded'>
                    <Skeleton height={150} width={150} className="align-self-start mr-3 item-img" />
                    <div className="media-body ml-3">
                        <h5 className="mt-0"><Skeleton width={50} height={20}/></h5>
                        <p><Skeleton width={500} height={50}/></p>
                        <div className='mb-0 align-self-end'>
                        <p className="text-muted mb-0"><small><Skeleton width={100} height={10}/></small></p>
                        <p className="text-muted mb-2"><small><Skeleton width={50} height={10}/></small></p>
                        </div>
                    </div>
            </div>
                ))}
        
    </div>
)}


export default Loaded;