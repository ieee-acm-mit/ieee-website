import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './ImageSlider.css';


const Slideshow = (props) => {
    let slideImages = props.slideImages;
    return (
      <Fade autoPlay={true} duration={6000} indicators={true}>
        {slideImages.map((slideImage, index)=> (
          <div key={index}>
            <div className="slider-content"
                  style={{ backgroundImage: `url(${slideImage.url})` }}>
              <div className="overlay"></div>
              <div className="container caption">
                <h1>MIT IEEE/ACM</h1>
                <p>{ slideImage.caption }</p>
              </div>
            </div>
          </div>
        ))} 
      </Fade>
    )
}

export default Slideshow;
