// components/YouTubeVideo.tsx

import React from 'react';
import YouTube from 'react-youtube';

interface YouTubeVideoProps {
    videoId: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId }) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    };

    return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubeVideo;
