import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API, } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useVideoContext } from '../utils/VideoContext';


const LikedVideo = () => {
    const [videos, setVideos] = useState([]);
    const { likedVideos } = useVideoContext();
    console.log('likedVideo ', likedVideos)
    useEffect(() => {
       setVideos(likedVideos);
       console.log('liked loaded')
    }, []);

    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '8px',
            }}
        >
            {videos.map((video) => (
                <Link key={video.id} to={`/watch?v=${video.id}`}>
                    <VideoCard key={video.id} info={video} />
                </Link>

            ))}
        </div>
    );
};


export default LikedVideo;
