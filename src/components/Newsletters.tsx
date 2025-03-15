import './Newsletters.css';
import '../css/portfolio.css';
import IEEELogo from '/images/newsletter/empty-ieee-logo.png';
import nov24 from '/newsletter/newsletter-november-24.html?url';
import dec24 from '/newsletter/newsletter-december-24.html?url';
import apr24 from '/newsletter/newsletter-april-24.html?url';


const newslettersList = [
  {
    month: 'April', year: '2024', path: apr24,
  },
  {
    month: <small>November</small>, year: '2024', path: nov24,
  },
  {
    month: <small>December</small>, year: '2024', path: dec24,
  }
]

const newsLatest = dec24;


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
