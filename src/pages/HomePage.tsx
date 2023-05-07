import React from 'react';
import Slideshow from '../components/ImageSlider';


const HomePage: React.FC = () => {


  const sliderStyle = {
    width: "500px",
    height: "300px",
  }

  return (
    <div>
      <h1>Welcome to my website!</h1>
      <p>This is the homepage.</p>
      <div style={sliderStyle}> 
        <Slideshow />
      </div>
    </div>
  );
};

export default HomePage;
