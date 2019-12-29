import React from 'react';
import { Spinner } from 'reactstrap'

const Loading = () => {
    return (
        <div className='loading'>
            <Spinner type="grow" color="primary" style={{ width: '3rem', height: '3rem' }} />
            <Spinner type="grow" color="secondary" style={{ width: '3rem', height: '3rem' }} />
            <Spinner type="grow" color="success" style={{ width: '3rem', height: '3rem' }} />
            <Spinner type="grow" color="danger" style={{ width: '3rem', height: '3rem' }} />
            <Spinner type="grow" color="warning" style={{ width: '3rem', height: '3rem' }} />
            <Spinner type="grow" color="info" style={{ width: '3rem', height: '3rem' }} />
            <Spinner type="grow" color="dark" style={{ width: '3rem', height: '3rem' }} />
        </div>
    )
}
export default Loading;