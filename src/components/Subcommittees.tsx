import '../css/portfolio.css'


const subcomList = [
  {
    name: 'URTC',
    link: 'https://urtc.mit.edu/',
    photo: 'urtc.png',
    description: `As an IEEE official conference, URTC brings undergrads to
                  publish, present and discuss their solutions, research or
                  case studies to advance technology.`
  },
  {
    name: 'Voltage',
    link: 'https://voltage.scripts.mit.edu/voltage/index.html',
    photo: 'voltage.png',
    description: `Voltage organizes events for the undergraduate EE community
                  that allow students, faculty, alumni, and industry to interact.`
    /* We aim to make being 6-1 more than a major, but a community. */
  },
  {
    name: 'Women in EECS',
    link: 'http://womenineecs.mit.edu/',
    photo: 'wieecs.png',
    description: `Our mission is to build a community for women in EECS that
                  supports, encourages, and empowers them to succeed.`
  }
]


const Subcommittees = () => (
  <div className="content-section">
    <h2>Our Subcommittees</h2>

    <div className="row">

      {subcomList.map((subcom) => (
        <div className="portfolio-item col-md-4 col-sm-6">
          <div className="portfolio-thumb">
            <img src={'images/subcommittees/' + subcom.photo} alt="" />
            <div className="portfolio-overlay">
              <h3>{subcom.name}</h3>
              <p>{subcom.description}</p>
              <a href={subcom.link}>
                <i className="fa-solid fa-square-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      ))}

    </div>
  </div>
);

export default Subcommittees;