import React from 'react';

import Skeleton from 'react-loading-skeleton';

const Loaded = ({marginTop}) =>{

  const loop = [1,2,3,4,5,6];

  return(
    <div className='container' style={{marginTop:`${marginTop}`}}>
      <div className="row mb-2">
          <div className="col-12">
              <Skeleton width={100}  height={27}/>
          </div>
      </div>
      <div className="row">
      {loop.map(idx=>(
        <div className='col-4'>
        <div className='card-deck mb-4 '>
          <div className='card border-light bg-light'>
            <div className='card-img-top'><Skeleton width={348} height={200}/></div>
               <div className='card-body text-center pb-2'>
                <p className='text-muted font-weight-bold mb-1'><Skeleton width={150}/></p>
                <h5 className='card-title'><Skeleton width={200}/></h5>
                <span className='card-text'><Skeleton width={210} count={2}/></span>
                 </div>
                 <div className='footer text-center mb-2'>
                 <small className='text-muted'><Skeleton width={150}/></small>
                 </div>
                 </div>
        </div>
    </div>
      ))}
        
      </div>
    </div>
  )
}

export default Loaded;