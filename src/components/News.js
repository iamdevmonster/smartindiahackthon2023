import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import $ from 'jquery'; 

import YouTube from 'react-youtube';

const News = () => {
  useEffect(() => {
    $('.slick-list').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
    });
  }, []);

  const videoContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  };

  const videoStyle = {
    width: '400px',
    border: '2px solid #ccc',
    borderRadius: '8px',
  };

  const videoSources = [
    { src: 'https://www.youtube.com/watch?v=tVSok6Li_Jg', type: 'youtube' },
    { src: 'videos/VID-1.mp4', type: 'video/mp4' },
    { src: 'videos/VID-2.mp4', type: 'video/mp4' },
    { src: 'videos/VID-3.mp4', type: 'video/mp4' },
  ];

  return (
    <div className="slick-list" style={videoContainerStyle}>
      {videoSources.map((video, index) => (
        <div key={index} className="slick-slide" style={{ ...videoStyle, marginRight: '10px' }}>
          {video.type === 'youtube' ? (
            <YouTube
              videoId={video.src.split('v=')[1]}
              opts={{ width: videoStyle.width, height: videoStyle.width * (9 / 16) }} // Set the height based on the aspect ratio (16:9)
            />
          ) : (
            <div>
              <video width="400" controls style={videoStyle}>
                <source src={video.src} type={video.type} />
              </video>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default News;