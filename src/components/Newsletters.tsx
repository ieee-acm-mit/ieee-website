import './Newsletters.css';
import '../css/portfolio.css';
import IEEELogo from '/images/newsletter/empty-ieee-logo.png';
import may25 from '/newsletter/newsletter-may-25.html?url';
import oct25 from '/newsletter/newsletter-october-25.html?url';
import nov25 from '/newsletter/newsletter-november-25.html?url';


const newslettersList = [
  // {
  //   month: <small>February</small>, year: '2024', path: feb24,
  // },
  {
    month: 'May', year: '2025', path: may25,
  },
  {
    month: 'October', year: '2025', path: oct25,
  },
  {
    month: 'November', year: '2025', path: nov25,
  }
]

const newsLatest = nov25;


const Newsletters = () => {
  return (
    <div className="d-flex newsletter-container">

      {newslettersList.map(({month, year, path}) => (
        <div className="portfolio-item">
          <div className="portfolio-thumb">
            <img src={ IEEELogo } alt={ month + " Newsletter"} />
            <h3 className="newsletter-text">{ month }</h3>
            <h3 className="newsletter-text">{ year }</h3>
            <div className="portfolio-overlay newsletter-overlay">
              <h3>{ month } { year }</h3>
              <p>Check out { month }'s newsletter</p>
              <a href={ path }>
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
export { newsLatest };
