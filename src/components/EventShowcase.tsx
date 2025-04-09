import { Fade } from 'react-slideshow-image';
import "./ImageSliders.css";
const photos = import.meta.glob('/images/events/*', {eager: true, as: 'url'});


// Default event slides. Slide on Home Page includes three additional images.
export const eventSlides = [
  {
    url: '/images/events/tesla.jpg',
    caption: 'Networking event with Tesla'
  },
  {
    url: '/images/events/break2.jpeg',
    caption: 'Cookies and Cocoa Study Break!'
  },
  {
    url: '/images/events/Leslie-Kaelbling.jpeg',
    caption: 'Dinner with Professor Leslie Kaelbling!'
  },
  {
    url: '/images/events/URTC-2023.jpeg',
    caption: 'MIT IEEE Undergrad Research Tech Conference 2023'
  },
  {
    url: '/images/events/Tom-Leighton.jpeg',
    caption: 'On Life @ MIT and Akamai with Professor Tom Leighton'
  },
  // {
  //   url: '/images/events/break1.jpg',
  //   caption: "Cookies and Cane's Study Break",
  // },
  {
    url: '/images/events/IEEE-UPP.jpg',
    caption: 'IEEE UPP Presentation!'
  },
  {
    url: '/images/events/break3.jpg',
    caption: 'Halloween Study Break'
  },
  {
    url: '/images/events/intel-coffee.jpg',
    caption: 'Intel Coffee Chat!'
  },
  {
    url: '/images/events/discover-course-6.png',
    caption: 'Discover Course 6'
  },
  {
    url: '/images/events/Armando-Solar-Lezama.jpg',
    caption: 'Dinner with Professor Armando Solar-Lezama!'
  }
  // {
  //   url: '/images/events/Hal-Abelson.jpg',
  //   caption: 'Dinner with Professor Hal Abelson!'
  // },
  // {
  //   url: '/images/events/big-little-mixer.jpg',
  //   caption: 'Big Little Mixer!'
  // },
];


const indicators = (index: number) => {
  const img = eventSlides[index];
  return <img src={photos[img.url]} className="indicator" alt={img.caption} />;
}

function EventShowcase(props) {
  let slideImages = props.slideImages || eventSlides;   // default to eventSlides

  return (
    <div className="eventsc-container">
      <Fade autoplay={true} duration={5500} transitionDuration={500} indicators={indicators}
            prevArrow={<a className="arrow">&#10094;</a>}
            nextArrow={<a className="arrow">&#10095;</a>}>
        {slideImages.map((img: {url: string, caption: string}, index: number) => (
          <div key={index}>
            <img src={photos[img.url]} className="eventsc-img"
                 alt={img.caption} loading="lazy" />
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
