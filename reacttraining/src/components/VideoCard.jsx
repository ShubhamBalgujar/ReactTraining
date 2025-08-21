import React from 'react';
import { useVideoContext } from '../utils/VideoContext';

const VideoCard = ({info}) => {
    const {snippet,statistics} = info;
    const {title,channelTitle,thumbnails} = snippet;
    const{likeVideo}=useVideoContext();
  return (
    <div
      style={{
        margin: '8px',
        padding: '8px',
        width: '18rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        borderRadius: '12px',
        background: '#fff',
        boxSizing: 'border-box',
      }}
    >
      <img
        style={{ borderRadius: '12px', width: '100%' }}
        src={thumbnails?.medium?.url}
        alt={"thumbnail"}
      />
      <h3 style={{ fontWeight: 'bold', padding: '12px 0 8px 0', fontSize: '1.1rem' }}>{title}</h3>
      <p style={{ margin: 0, color: '#444', fontSize: '0.95rem' }}>{channelTitle}</p>
      <p style={{ margin: 0, color: '#888', fontSize: '0.9rem' }}>{statistics?.viewCount} views</p>
       <button onClick={e=>{e.stopPropagation();
    e.preventDefault();likeVideo(info)}}>❤️</button>
    </div>
  );
}

export default VideoCard