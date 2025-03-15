import React from 'react';
import EventShowcase from '../components/EventShowcase';


const EventPage: React.FC = () => {
  return <>
    <div style={{ maxWidth: '850px', margin: 'auto' }}>
      <EventShowcase />
    </div>

    <div className="content-section" id="calendar">
      <div className="container">
        <div className="heading-section col-md-12 text-center">
          <h2>Upcoming Events</h2>
          <div className="row" id="calendarContainer"></div>
          {/* <!--populated by calendar.js --> */}
        </div>
      </div>
    </div>

    <div className="content-section" style={{ maxWidth: '800px' }}>
      <h2>Event Calendar</h2>
      <p>Add our calendar to stay updated on the latest events!</p>
      <div className="calendar">
        <iframe
          src="https://calendar.google.com/calendar/embed?title=MIT%20IEEE%2FACM%20Calendar&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=l43ijjmq28vt97abnijs443mhc%40group.calendar.google.com&amp;color=%23875509&amp;ctz=America%2FNew_York"
          style={{ borderWidth: 0 }}
          width="100%"
          height="500px"
        ></iframe>
      </div>
    </div>
  </>
};

export default EventPage;
