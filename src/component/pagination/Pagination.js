import React from 'react';

import { nextPage, previousPage} from'./Pagination.util';

import './pagination-style.scss';

const Paginations = ({page , setPage}) =>{

    return(
             <div className='center mt-3 mb-3'>

                <nav aria-label="pagination">

                    <ul className="pagination">

                        <li className={`page-item ${page==1? 'disabled': null}`}><a className="page-link" onClick={ ()=> previousPage(page,setPage)}>Previous</a></li>
                        <li className={`page-item ${page==1? 'active': null}`}><a className="page-link" >1</a></li>
                        <li className={`page-item ${page==2? 'active': null}`}><a className="page-link">2<span className="sr-only">(current)</span></a></li>
                        <li className={`page-item ${page==3? 'active': null}`}><a className="page-link" >3</a></li>
                        <li className={`page-item ${page==3? 'disabled': null}`}><a className="page-link" onClick={ ()=> nextPage(page,setPage)}>Next</a></li>
                    
                    </ul>
                </nav>
            </div>
    )
}
export default Paginations;