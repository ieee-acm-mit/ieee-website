import React from 'react';
import EventsShowcase from '../components/EventShowcase';
import Subcommittees from '../components/Subcommittees';


const AboutPage: React.FC = () => {
  return <>
    <div className="content-section container">
      <div>
        <div>
          The MIT IEEE/ACM Club represents the student branch for two
          professional international organizations, the Institute of
          Electrical and Electronics Engineers (IEEE) and the
          Association for Computing Machinery (ACM). <br /><br />
          Our mission is to create and support a tight-knit community
          among the students and faculty in the Department of
          Electrical Engineering and Computer Science (EECS) at MIT.
        </div>
        <div>
          Our chapter consists of an executive board dedicated to
          making sure you feel welcome. We prioritize your engagement
          by connecting freshmen to upperclassmen, undergraduates to
          faculty, and applicants to prospective internships.<br /><br />
          Get involved with all things course 6 and beyond by coming
          to our events! You'll meet students who are just as
          passionate as you are in the diverse color spectrum that is
          course 6 as well as professors and leaders in the field.
        </div>
        <div>
          We host events all throughout the year and our highlights
          include:
          <br /><br />
          Discover Course 6 <br />
          Big-Little Events <br />
          Study Breaks and Game Nights <br />
          Pset Parties <br />
          Fireside Chats with Professors <br />
          Tech Talks with Industry Professionals <br />
        </div>
      </div>

      <EventsShowcase />  {/* change: should not be here */}
    </div>

    <div className="content-section" style={{ maxWidth: '840px' }}>
      <Subcommittees />
    </div>
  </>;
};

export default AboutPage;
