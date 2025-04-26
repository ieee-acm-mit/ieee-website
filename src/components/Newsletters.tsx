import './Newsletters.css';
import '../css/portfolio.css';
import IEEELogo from '/images/newsletter/empty-ieee-logo.png';
import apr7 from '/newsletter/newsletter-april-7.html?url';
import mar17 from '/newsletter/newsletter-march-17.html?url';
import apr14 from '/newsletter/newsletter-april-14.html?url';


const newslettersList = [
  // {
  //   month: <small>February</small>, year: '2024', path: feb24,
  // },
  {
    month: 'March', year: '2025', path: mar17,
  },
  {
    month: 'April', year: '2025', path: apr7,
  },
  {
    month: 'April', year: '2025', path: apr14,
  }
]

const newsLatest = apr14;


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
