import React from 'react';

const VideoBackground = () => (
  <video
    autoPlay
    loop
    muted
    playsInline
    className="video-bg"
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      objectFit: 'cover',
      zIndex: 0,
      pointerEvents: 'none',
      minWidth: '100%',
      minHeight: '100%',
      background: '#000',
    }}
  >
    <source src={process.env.PUBLIC_URL + '/back.mp4'} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default VideoBackground;
