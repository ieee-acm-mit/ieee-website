import React from 'react';
import './Newsletters.css';
import '../../css/font-awesome.css';


const newslettersList = [
  ['March', '2023', 'newsletter/newsletter-march-23.pdf'],
  ['May', '2023', 'newsletter/newsletter-may-23.pdf'],
  ['November', '2023', 'newsletter/newsletter-november-23.html']
]


const Newsletters = () => {
  return (
    <div className="row justify-content-around">

      {newslettersList.map(([month, year, file]) => (
        <div className="portfolio-item">
          <div className="portfolio-thumb">
            <img src="images/newsletter/empty-ieee-logo.png" alt="{ month } Newsletter" />
            <h3 className="newsletter-text" style={{ top: '40px' }}>{ month }</h3>
            <h3 className="newsletter-text" style={{ bottom: '45px' }}>{ year }</h3>

            <div className="portfolio-overlay newsletter-overlay">
              <h3>{ month } { year }</h3>
              <p>Check out { month }'s newsletter</p>
              <a href={ file }>
                <i className="fa fa-external-link-square"></i>
              </a>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Newsletters;