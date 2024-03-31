import { Fade } from 'react-slideshow-image';
import "./ImageSliders.css";


// Default event slides. Slide on Home Page includes three additional images.
export const eventSlides = [
  {
    url: 'images/slideshow/s1.JPG',
    caption: 'Discover Course 6!'
  },
  {
    url: 'images/slideshow/s3.jpg',
    caption: 'IEEE UPP Presentation!'
  },
  {
    url: 'images/slideshow/s4.jpg',
    caption: 'Intel Coffee Chat!'
  },
  {
    url: 'images/slideshow/s5.jpg',
    caption: 'Dinner with Professor Hal Abelson!'
  },
  {
    url: 'images/slideshow/s6.jpg',
    caption: 'Big Little Mixer!'
  },
  {
    url: 'images/slideshow/s7.jpg',
    caption: 'Cookies and Cocoa Study Break!'
  },
  {
    url: 'images/slideshow/s9.jpg',
    caption: 'Dinner with Dr Joe Steinmeyer!'
  }
];


const indicators = (index: number) => {
  const img = eventSlides[index];
  return <img src={img.url} className="indicator" alt={img.caption} />;
}

function EventShowcase(props) {
  let slideImages = props.slideImages || eventSlides;   // default to eventSlides
  
  return (
    <div className="eventsc-container">
      <Fade autoPlay={true} duration={7000} transitionDuration={500} indicators={indicators}
            prevArrow={<a className="arrow">&#10094;</a>} easing='ease'
            nextArrow={<a className="arrow">&#10095;</a>}>
        {slideImages.map((img: {url: string, caption: string}, index: number) => (
          <div key={index}>
            <div className="eventsc-content" role="img" alt={img.caption}
                 style={{ backgroundImage: `url(${img.url})` }}></div>
            <p className="caption">{ img.caption }</p>
          </div>
        ))}
      </Fade>

      {/* Potential video */}
      {/* <center>
        <video
          width="900"
          height="100%"
          poster="images/slideshow/s2.jpg"
          controls
        >
        <source src="images/slideshow/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </center> */}
    </div>
  );
};
export default EventShowcase;