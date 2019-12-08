import React from 'react'
import Nav from './common/Nav'
const SingleBlog = () => {
    const mockUrl1 = 'https://images.unsplash.com/photo-1575438481582-b971d5a00fb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'

    const mockUrl2 = 'https://images.unsplash.com/photo-1575403071054-56585330a0ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80'

    const mockUrl3 = 'https://images.unsplash.com/photo-1575410226902-dcfe1279f1a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'

    const mockUrl4 = 'https://images.unsplash.com/photo-1575399545768-5f1840c1312d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80'

    const mockUserImg = 'https://images.unsplash.com/photo-1575410236084-db61fcf7fea8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
    const renderCoverImg = () => {
        return (
            <div className="site-cover site-cover-sm same-height overlay single-page" style={{ backgroundImage: `url(${mockUrl1})` }}>
                <div className="container">
                    <div className="row same-height justify-content-center">
                        <div className="col-md-12 col-lg-10">
                            <div className="post-entry text-center">
                                <span className="post-category text-white bg-success mb-3">Category type</span>
                                <h1 className="mb-4">The AI magically removes moving objects from videos.</h1>
                                <div className="post-meta align-items-center text-center">
                                    <figure className="author-figure mb-0 mr-3 d-inline-block"><img src={mockUserImg} alt="Image" className="img-fluid"/></figure>
                                    <span className="d-inline-block mt-1">By Carrol Atkinson</span>
                                    <span>&nbsp;-&nbsp; February 10, 2019</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const renderMainSection = () => {

    }
    return (
        <div>
            <Nav/>
            {renderCoverImg()}

        </div>
    )
}
export default SingleBlog
