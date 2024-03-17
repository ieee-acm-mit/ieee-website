import React from 'react';
import Slideshow from '../components/ImageSlider';
import "../css/HomePage.css";

const HomePage: React.FC = () => {


  const sliderStyle = {
    width: "500px",
    height: "300px",
  }

  return (
    <>
      <EventShowcase slideImages={[ ...introSlides, ...eventSlides.slice(0, 5) ]} />
      <div className="container">

        <div className="my-5">
          <div className="py-2">
            MIT IEEE/ACM is the student branch for the Institute of Electrical and Electronics Engineers (IEEE) and the Association for Computing Machinery (ACM). We hope to cultivate a tight-knit community for EECS students at MIT.
          </div>
          <button className='button button-primary py-2 my-2'>
            <a
              target="_blank"
              href="newsletter/newsletter-november-23.html"
              className="text-icon w-100"
              ><b>Our Most Recent Newsletter</b></a>
          </button>
          <button className='button button-primary py-2'>
            <a target="_blank" href="https://groups.mit.edu/webmoira/list/ieee-acm-interest" 
            className="text-icon"><b>Join Our Mailing list</b></a>
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
