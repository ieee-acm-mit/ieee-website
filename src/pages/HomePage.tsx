import React from 'react';
import "../css/HomePage.css";
import {eventSlides, EventShowcase} from '../components/EventsShowcase';


const introSlides = [
  {
    url: 'images/slideshow/s8.JPG',
    caption: (<small>
                The MIT IEEE/ACM Club represents the student branch for two
                professional international organizations, IEEE and ACM. <br/>
                Our mission is to create and support a tight-knit community among
                the students and faculty in the EECS Department at MIT.
              </small>)
  },
  {
    url: 'images/slideshow/s2.jpg',
    caption: (<small>
                Our chapter consists of an executive board dedicated to making sure
                you feel welcome. We prioritize your engagement by connecting
                freshmen to upperclassmen, undergraduates to faculty, and
                applicants to prospective internships. <br/>
                Get involved with all things course 6 and beyond by coming to our
                events! You'll meet students who are just as passionate as you are
                in the diverse color spectrum that is course 6 as well as professors
                and leaders in the field.
              </small>)
  },
  {
    url: 'images/slideshow/s10.jpg',
    caption: (<small>
                We host events all throughout the year and our highlights include:
                <br/>
                Networking and Dinner with Companies <br/>
                Fireside Chats with Professors <br/>
                Discover Course 6 <br/>
                Study Breaks and Game Nights <br/>
                Pset Parties <br/>
              </small>)
  }
]


const HomePage: React.FC = () => {
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
              href="newsletter/Newsletter_ November 2022.pdf"
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
