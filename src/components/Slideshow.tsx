import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './ImageSliders.css';
const photos = import.meta.glob('/images/events/*', {eager: true, as: 'url'});


/** A generic image slider component, primarily used in the home page. */
const Slideshow = (props) => {
    let slideImages = props.slideImages;
    return (
      <Fade autoplay={true} duration={6500} indicators={true}
            arrows={false} pauseOnHover={false}>
        {slideImages.map((img: {url: string, caption: string}, index: number) => (
          <div key={index}>
            <div className="slider-content" aria-label={img.caption}
                 style={{ backgroundImage: `url("${photos[img.url]}")` }}>
              <div className="overlay"></div>
              <div className="container caption">
                <h1 className="animate__animated animate__tada">
                  MIT IEEE/ACM
                </h1>
                <p>{ img.caption }</p>
              </div>
            </div>
          </div>
        ))}
      </Fade>
    )
}

export default Slideshow;
