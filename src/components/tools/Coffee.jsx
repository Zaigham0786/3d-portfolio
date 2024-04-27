import React from 'react';
import './coffee.scss';
import LottiePlayer from 'react-lottie-player'; // Correct import statement

const Coffee = () => {
  return (
    <div className="coffee-parent">
      <LottiePlayer
        autoplay
        controls
        loop
        mode="normal"
        src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
        style={{ width: '100%', height: '100%' }} // Adjusted style to fit parent container
      />
    </div>
  );
};

export default Coffee;
