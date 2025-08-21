import React, { createContext, useContext, useState } from 'react';

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [likedVideos, setLikedVideos] = useState([]);
    
  const likeVideo = (video) => {
    setLikedVideos((prev) => {
      const exists = prev.find(v => v.id === video.id);
      return exists ? prev : [...prev, video];
    });
  };

  const unlikeVideo = (id) => {
    setLikedVideos((prev) => prev.filter(video => video.id !== id));
  };

  return (
    <VideoContext.Provider value={{ likedVideos, likeVideo, unlikeVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => useContext(VideoContext);