import React from 'react';
import Nav from './common/Nav';
import '../style/Main.css';
const Main = () =>{
    const renderTop = () =>{
        return(
        <div className="site-section bg-light">
            <div className="container">
                <div className="row align-items-stretch retro-layout-2">
                    <div className="col-md-4">
                        <a href="single.html" className="h-entry mb-30 v-height gradient hvr-float" style={{backgroundImage: `url(https://images.unsplash.com/photo-1562886929-c29b9a76b0a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80}`}}>
                        
                        <div className="text">
                            <h2>The AI magically removes moving objects from videos.</h2>
                            <span className="date">July 19, 2019</span>
                        </div>
                        </a>
                        <a href="single.html" className="h-entry v-height gradient hvr-float" style={{backgroundImage: `url(https://images.unsplash.com/photo-1562886929-c29b9a76b0a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80}`}}>
                        
                        <div className="text">
                            <h2>The AI magically removes moving objects from videos.</h2>
                            <span className="date">July 19, 2019</span>
                        </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="single.html" className="h-entry img-5 h-100 gradient hvr-float" style={{backgroundImage: `url(https://images.unsplash.com/photo-1562886929-c29b9a76b0a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80}`}}>
                        
                        <div className="text">
                            <div className="post-categories mb-3">
                            <span className="post-category bg-danger">Travel</span>
                            <span className="post-category bg-primary">Food</span>
                            </div>
                            <h2>The AI magically removes moving objects from videos.</h2>
                            <span className="date">July 19, 2019</span>
                        </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="single.html" className="h-entry mb-30 v-height gradient hvr-float" style={{backgroundImage: `url(https://images.unsplash.com/photo-1562886929-c29b9a76b0a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80}`}}>
                        
                        <div className="text">
                            <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                            <span className="date">July 19, 2019</span>
                        </div>
                        </a>
                        <a href="single.html" className="h-entry v-height gradient hvr-float" style={{backgroundImage: `url(https://images.unsplash.com/photo-1562886929-c29b9a76b0a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80}`}}>
                        
                        <div className="text">
                            <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                            <span className="date">July 19, 2019</span>
                        </div>
                        </a>
                    </div>
                    </div>
            </div>
    </div>

    );
    }

    const renderFeed = () =>{
        return (
            <div className="site-section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-12">
                                <h2>Recent Posts</h2>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 mb-4 ">
                                <div className="entry2 hvr-float">
                                    <a href="single.html"><img src="https://images.unsplash.com/photo-1562886929-c29b9a76b0a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80}" alt="Image" className="img-fluid rounded"/></a>
                                        <div className="excerpt">
                                            <span className="post-category text-white bg-secondary mb-3">Politics</span>

                                            <h2><a href="single.html">The AI magically removes moving objects from videos.</a></h2>
                                                <div className="post-meta align-items-center text-left clearfix">
                                                     <figure className="author-figure mb-0 mr-3 float-left"><img src="https://images.unsplash.com/photo-1562886929-c29b9a76b0a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80}" alt="Image" className="img-fluid"/></figure>
                                                        <span className="d-inline-block mt-1">By <a href="#">Carrol Atkinson</a></span>
                                                            <span>&nbsp;-&nbsp; July 19, 2019</span>
                                                </div>
                            
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                                                    <p><a href="#">Read More</a></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>             
        )
    }

    const renderPagination = () =>{
        return(
            <div className='container'>
                <div className='row text-center pt-5 border-top mb-4'>
                    <div className='col-md-12 col-lg-12'>
                        <div className='custom-pagination'>
                            <span>1</span>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <span>...</span>
                                <a href="#">15</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    const renderHotOfCategory = () =>{
        return(
            <div className="site-section bg-light">
                
                <div className="container">

                    <div className="row align-items-stretch retro-layout">
                    
                    <div className="col-md-5 order-md-2">
                        <a href="single.html" className="hentry img-1 h-100 gradient hvr-float" style={{backgroundImage: `url(https://images.unsplash.com/photo-1562886929-c29b9a76b0a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80}`}}>
                            <span className="post-category text-white bg-danger">Technology</span>
                            <div className="text">
                                <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                                <span>February 12, 2019</span>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-7">
                        
                        <a href="single.html" className="hentry img-2 v-height mb30 gradient hvr-float" style={{backgroundImage: `url(https://images.unsplash.com/photo-1562886929-c29b9a76b0a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80}`}}>
                            <span className="post-category text-white bg-success">Finance</span>
                            <div className="text text-sm">
                                <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                                <span>February 12, 2019</span>
                            </div>
                        </a>
                        
                        <div className="two-col d-block d-md-flex">
                            <a href="single.html" className="hentry v-height img-2 gradient hvr-float" style={{backgroundImage: `url(https://images.unsplash.com/photo-1562886929-c29b9a76b0a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80}`}}>
                                <span className="post-category text-white bg-primary">Sports</span>
                                <div className="text text-sm">
                                <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                                <span>February 12, 2019</span>
                                </div>
                            </a>
                            <a href="single.html" className="hentry v-height img-2 ml-auto gradient hvr-float" style={{backgroundImage: `url(https://images.unsplash.com/photo-1562886929-c29b9a76b0a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80}`}}>
                                <span className="post-category text-white bg-warning">Industrial</span>
                                <div className="text text-sm">
                                <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                                <span>February 12, 2019</span>
                                </div>
                            </a>
                        </div>  
                        
                    </div>
                    </div>

                </div>
    </div>
        )
    }
    return(
        <div>
            <Nav/>
            {renderTop()}
            {renderFeed()}
            {renderPagination()}
            {renderHotOfCategory()}
        </div>
    );
}
export default Main;