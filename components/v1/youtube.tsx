import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

interface YouTubeVideoProps {
    videoId: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId }) => {
    // const [videoWidth, setVideoWidth] = useState<number>(640);

    // useEffect(() => {
    //     const handleResize = () => {
    //         const screenWidth = window.innerWidth;
    //         const newWidth = Math.min(screenWidth, 640); // 画面幅が640未満の場合は640を使用
    //         setVideoWidth(newWidth);
    //     };

    //     handleResize(); // 初期化時に1度実行
    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    const opts = {
        height: 300, 
        width: "100%",
        playerVars: {
            autoplay: false,
        },
    };

    return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubeVideo;
