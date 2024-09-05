import React from 'react';
import Slideshow from '../components/Slideshow';
import Newsletters, { newsLatest } from '../components/Newsletters';
import EventShowcase, { eventSlides } from '../components/EventShowcase';
import "../css/HomePage.css";
import teslaPhoto from '/images/events/tesla.jpg';
import LKBPhoto from '/images/events/Leslie-Kaelbling.jpeg';
import break2 from '/images/events/break2.jpg';
import teamPhoto from '/images/exec/group_photo.jpeg';


const introSlides = [
  {
    url: '/images/events/Tom-Leighton.jpeg',
    caption: (<p>
                At MIT IEEE/ACM, our mission is to support a tight-knit
                community among the students and faculty in the EECS Department.
              </p>)
  },
  {
    url: '/images/events/break1.jpg',
    caption: (<small>
                We connect freshmen to upperclassmen, undergrads to faculty,
                and applicants to prospective internships. <br/>
                Get involved by coming to our events! You'll meet students
                just as passionate as you are as well as professors and
                leaders in the field. And we always have <i>food</i>!
              </small>)
  },
  {
    url: '/images/events/Hal-Abelson.jpg',
    caption: (<small>
                Our highlights include:
                <br/>
                Networking & Dinner with Companies <br/>
                Fireside Chats with Professors <br/>
                Discover Course 6 <br/>
                Study Breaks and Game Nights <br/>
                Pset Parties <br/>
              </small>)
  }
]


const HomePage: React.FC = () => {
  return <>
    <Slideshow slideImages={[ ...introSlides, ...eventSlides.slice(0, 4) ]}/>
    
    <p className="content-section container px-5">
      The MIT IEEE/ACM Club represents the student branch for two professional
      international organizations, the Institute of Electrical and Electronics
      Engineers (IEEE) and the Association for Computing Machinery (ACM).
      <br /><br />
      Our mission is to create and support a tight-knit community among the
      students and faculty in the Department of Electrical Engineering and
      Computer Science (EECS) at MIT.
    </p>

    <div className="content-section">
      <h2>Events</h2>
      <div className="home-events">
        <div className="row">
          <div className="col">
            <div className="home-event card">
              <img src={teslaPhoto} alt="Industry Networking"/>
              <div className="home-events-caption"
                   style={{ backgroundColor: '#EDAE00' }}>
                Industry Networking
              </div>
            </div>
          </div>

          <div className="col">
            <div className="home-event card">
              <img src={LKBPhoto} alt="Faculty Connection"/>
              <div className="home-events-caption"
                   style={{ backgroundColor: '#FB6542' }}>
                Faculty Connection
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="home-event card">
              <img src={break2} alt="Study Breaks"/>
              <div className="home-events-caption"
                   style={{ backgroundColor: '#2696ff' }}>
                Study Breaks
              </div>
            </div>
          </div>
        </div>

        <p className="container">
          Get involved with all things course 6 and beyond by coming
          to our events! You'll meet students who are just as
          passionate as you are in the diverse color spectrum that is
          course 6 as well as professors and leaders in the field.
        </p>
        <a target="_blank" href="event">
          <button className='button button-primary mt-3'>
            <b>More Past & Upcoming Events</b> &nbsp;
            <i className="fa-solid fa-chevron-right ml-3"></i>
          </button>
        </a>
      </div>
    </div>

    <div className="content-section" style={{ maxWidth: '840px' }}>
      <h2>Photos</h2>
      <EventShowcase />
    </div>

    <div className="content-section colored">
      <h2>Our Newsletter</h2>
      <Newsletters />
      <p className="container">
        Be on our mailing list! We broadcast (as well as dormspam) a lot about
        upcoming events, often with food! We send regular newsletters with
        photos of past events too. Stay tuned!
      </p>

      <a target="_blank" href="newsletter/newsletter-november-23.html">
        <button className='button button-primary'>
          <b>Our Most Recent Newsletter</b>
        </button>
      </a>
      &nbsp;&nbsp;
      <a target="_blank" href="https://groups.mit.edu/webmoira/list/ieee-acm-interest">
        <button className='button button-primary'>
          <b>Join Our Mailing list!</b>
        </button>
      </a>
    </div>

    <div>
      
      
    </div>

    <div className="content-section">
      <h2>Our team</h2>
      <p>
        Send a message to us at &nbsp;
        <a href="mailto:ieee-acm-exec@mit.edu">ieee-acm-exec@mit.edu</a> to contact us~
      </p>

      <img
        src={teamPhoto}
        className="team-photo mb-4"
        alt="team photo"
        style={{ maxWidth: '600px' }}
      />

      <p className="container">
        Our chapter consists of an executive board dedicated to
        making sure you feel welcome. We prioritize your engagement
        by connecting freshmen to upperclassmen, undergraduates to
        faculty, and applicants to prospective internships.<br /><br />
      </p>
      <a href="/team" className="mx-4">
        Meet Our Exec &nbsp;<i className="fa-solid fa-chevron-right"></i>
      </a>
      <a href="/about" className="mx-4">
        More About Us &nbsp;<i className="fa-solid fa-chevron-right"></i>
      </a>
    </div>
  </>;
};

export default HomePage;
