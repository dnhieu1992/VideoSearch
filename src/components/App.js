import React from 'react'
import VideoSearch from './VideoSearch';
import VideoList from './VideoList';
import VideoSelected from './VideoSelected';

const App = ()=>{
    return (
        <div className='container'>
            <VideoSearch />
            <div className='row'>
                <div className='col-sm-6'>
                    <VideoSelected  />
                </div>
                <div className='col-sm-6'>
                    <VideoList />
                </div>
            </div>
        </div>
    )
}

export default App;
