export function EventShowcase() {
    return (
    <div className="content-section" id="photos">
      <div className="container" style={{maxWidth: '900px', alignItems: 'center'}}>
        <div className="row">
          <div className="heading-section col-md-12 text-center">
            <h2>Photos</h2>
          </div>
        </div>
        <div className="mySlides">
          <div className="numbertext">1 / 10</div>
          <img src="images/slideshow/s1.JPG"  />
        </div>

        <div className="mySlides">
          <div className="numbertext">2 / 10</div>
          <img src="images/slideshow/s2.jpg"  />
        </div>

        <div className="mySlides">
          <div className="numbertext">3 / 10</div>
          <img src="images/slideshow/s3.jpg"  />
        </div>

        <div className="mySlides">
          <div className="numbertext">4 / 10</div>
          <img src="images/slideshow/s4.jpg"  />
        </div>

        <div className="mySlides">
          <div className="numbertext">5 / 10</div>
          <img src="images/slideshow/s5.jpg"  />
        </div>

        <div className="mySlides">
          <div className="numbertext">6 / 10</div>
          <img src="images/slideshow/s6.jpg"  />
        </div>

        <div className="mySlides">
          <div className="numbertext">7 / 10</div>
          <img src="images/slideshow/s7.JPG"  />
        </div>

        <div className="mySlides">
          <div className="numbertext">8 / 10</div>
          <img src="images/slideshow/s8.JPG"  />
        </div>

        <div className="mySlides">
          <div className="numbertext">9 / 10</div>
          <img src="images/slideshow/s9.jpg"  />
        </div>

        <div className="mySlides">
          <div className="numbertext">10 / 10</div>
          <img src="images/slideshow/s10.jpg"  />
        </div>

        <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a className="next" onclick="plusSlides(1)">&#10095;</a>

        <div className="caption-container">
          <p id="caption"></p>
        </div>

        <div className="row" >
          <div className="column">
            <img
              className="demo cursor"
              src="images/slideshow/s1.JPG"
              alt="Discover Course 6!"
            />
          </div>
          <div className="column">
            <img
              className="demo cursor"
              src="images/slideshow/s2.jpg"
              alt="Verkada Tech Talk!"
            />
          </div>
          <div className="column">
            <img
              className="demo cursor"
              src="images/slideshow/s3.jpg"
              alt="IEEE UPP Presentation!"
            />
          </div>
          <div className="column">
            <img
              className="demo cursor"
              src="images/slideshow/s4.jpg"
              alt="Intel Coffee Chat!"
            />
          </div>
          <div className="column">
            <img
              className="demo cursor"
              src="images/slideshow/s5.jpg"
              alt="Dinner with Professor Hal Abelson!"
            />
          </div>
          <div className="column">
            <img
              className="demo cursor"
              src="images/slideshow/s6.jpg"
              alt="Big Little Mixer!"
            />
          </div>
          <div className="column">
            <img
              className="demo cursor"
              src="images/slideshow/s7.JPG"
              alt="Cookies and Cocoa Study Break!"
            />
          </div>
          <div className="column">
            <img
              className="demo cursor"
              src="images/slideshow/s8.JPG"
              alt="Cookies and Cane's Study Break!"
            />
          </div>
          <div className="column">
            <img
              className="demo cursor"
              src="images/slideshow/s9.jpg"
              alt="Dinner with Dr Joe Steinmeyer!"
            />
          </div>
          <div className="column">
            <img
              className="demo cursor"
              src="images/slideshow/s10.jpg"
              alt="Dinner with Dr Justin Solomon!"
            />
          </div>
        </div>
      </div>
      <br />
      <center>
        <video
          width="900"
          height="100%"
          poster="images/slideshow/s2.jpg"
          controls
        >
          <source src="images/slideshow/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </center>
    </div>
    );
};
export default EventShowcase;