import React from 'react';
const renderVerticleModal = (props) =>{
        
    return(
        <Modal
        {...props}
        size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={()=> setModalShow(false)}
        

        >

            <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Sign Up
                    </Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <form onSubmit={handleEmailPassWordSubmit}>
                    <div className='form-group row p-4'>
                        
                        <label htmlFor='email' className="col-sm-1 col-form-label">Email  </label>
                        
                        <div className="col-sm-11">
                            <input className='form-control' name='email' id='email' type='email' onChange={handleChangeEmailPassWord}/>
                        </div>
                           
                    </div>

                    <div className='form-group row p-4'>

                        <label htmlFor='password' className="col-sm-1 col-form-label">Password </label>
                        <div className="col-sm-11">
                            <input name='password' id='password' type='password' onChange={handleChangeEmailPassWord}/>
                        </div>
                    </div>
                </form>

            </Modal.Body>

            <Modal.Footer>
                <Button
                    variant="primary"
                    disabled={isLoading}
                    onClick={!isLoading ? handleEmailPassWordSubmit : null}
                    >
                    {isLoading ? 'Loading…' : 'Log In'}
                </Button>
                <Button
                    variant="success"
                    disabled={isLoading}
                    onClick={!isLoading ? redirect: null}
                    >
                    {
                    isLoading ? 'Sign In' : 'Sign In'//for future 
                    }   
                </Button>
            </Modal.Footer>

        </Modal>
    )
}