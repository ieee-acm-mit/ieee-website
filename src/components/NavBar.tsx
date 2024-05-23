import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import '../css/navbar.css';
import Logo from '/images/logo_w_background.png';


function NavBar() {
  const [expand, setExpand] = useState(false);

  return (
    
    <nav className="navbar navbar-expand-md sticky-top">
      <div className="navbar-left">
        <img src={Logo} className="navbar-logo" />
        <div>
          MIT IEEE/ACM
        </div>
      </div>
      <div className="toggle-menu d-md-none"
            aria-controls="navbarSupportedContent" aria-expanded={expand}
            aria-label="Toggle navigation" onClick={() => setExpand(!expand)}>
        <i className="fa-solid fa-bars"></i>
      </div>

      <div className={`navbar-right navbar-collapse collapse ${expand ? "show" : ""}`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/event">Events</NavLink>
        <NavLink to="/team">Team</NavLink>
        <a
          href="https://www.facebook.com/Ieeeacmmit/"
          className="fa-brands fa-facebook logo"
        ></a>
        <a
          href="https://www.instagram.com/mit_ieee_acm/"
          className="fa-brands fa-instagram"
        ></a>
        <a
          href="https://medium.com/mit-ieee"
          className="fa-brands fa-medium"
        ></a>
      </div>
    </nav>

  );
};

export default NavBar;
