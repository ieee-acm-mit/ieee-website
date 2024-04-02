import React from 'react';
import './Newsletters.css';


const newslettersList = [
  ['March', '2023', 'newsletter/newsletter-march-23.pdf'],
  ['May', '2023', 'newsletter/newsletter-may-23.pdf'],
  [<small>November</small>, '2023', 'newsletter/newsletter-november-23.html']
]


const Newsletters = () => {
  return (
    <div className="row justify-content-around my-2 gx-0">

      {newslettersList.map(([month, year, file]) => (
        <div className="portfolio-item">
          <div className="portfolio-thumb">
            <img src="images/newsletter/empty-ieee-logo.png" alt={ month + " Newsletter"} />
            <h3 className="newsletter-text">{ month }</h3>
            <h3 className="newsletter-text">{ year }</h3>
            <div className="portfolio-overlay newsletter-overlay">
              <h3>{ month } { year }</h3>
              <p>Check out { month }'s newsletter</p>
              <a href={ file }>
                <i className="fa-solid fa-square-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Newsletters;