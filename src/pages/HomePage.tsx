import React from 'react';
import Slideshow from '../components/ImageSlider';
import "../css/HomePage.css";

const HomePage: React.FC = () => {


  const sliderStyle = {
    width: "500px",
    height: "300px",
  }

  return (
    <div className="homepage-container">
        
        <div className='py-2'>
          MIT IEEE/ACM is the student branch for the Institute of Electrical and Electronics Engineers (IEEE) and the Association for Computing Machinery (ACM). We hope to cultivate a tight-knit community for EECS students at MIT.
        </div>
        <div className='button button-primary py-2 my-2'>
          <a
            target="_blank"
            href="newsletter/Newsletter_ November 2022.pdf"
            className="text-icon"
            ><b>Our Most Recent Newsletter</b></a>
        </div>
        <div className='button button-primary py-2'>
          <a target="_blank" href="https://groups.mit.edu/webmoira/list/ieee-acm-interest" 
          className="text-icon"><b>Join Our Mailing list</b></a>
        </div> 

      {/* <div style={sliderStyle}> 
        <Slideshow />
      </div> */}
    </div>
  );
};

export default HomePage;
