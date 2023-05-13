import { NavLink } from 'react-router-dom';
import '../css/NavBar.css';
// import "../../css/animate.css";
// import "../../css/bootstrap.min.css";
// import "../../css/font-awesome.css";
// import "../../css/sdivdeshow.css";
// import "../../css/tracker.css";
// import "../../css/templatemo_misc.css";
// import mitLogo from './path/to/mit-logo.png'; // Replace with the correct path to your MIT logo image

export function NavBar() {
  return (

    <div className="navbar">
        <div className="navbar-left">
          <img src="../../images/logo_w_background.png" className="navbar-logo"/>
          <div>
            MIT IEEE/ACM
          </div>
        </div>
      
        
        <div className='navbar-right'>
            <div>
              <NavLink to="/">Home</NavLink>
            </div>
            <div>
              <NavLink to="/about">About</NavLink>
            </div>
            <div>
              <NavLink to="/team">Team</NavLink>
            </div>
        
            <div>
              <a
                href="https://www.facebook.com/Ieeeacmmit/"
                className="fab fa-facebook"
              ></a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/mit_ieee_acm/"
                className="fab fa-instagram"
              ></a>
            </div>
            <div>
              <a
                href="https://medium.com/mit-ieee"
                className="fab fa-medium"
              ></a>
            </div>
        </div>
    </div>

    
  );
};

export default NavBar;
