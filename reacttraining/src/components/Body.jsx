import React from 'react';
import { useNavigate } from 'react-router-dom';
import VideoContainer from './VideoContainer';


const Body = () => {
  const navigate = useNavigate();
    //console.log('body ')
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
        <button
          style={{ padding: '10px', borderRadius: '5px' }}
          onClick={() => navigate('/like')}
        >
          Go To Like Video List
        </button>
      </div>
      <VideoContainer />
    </div>
  );
}

export default Body