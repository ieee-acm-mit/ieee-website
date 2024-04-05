import { NavLink } from 'react-router-dom';
import '../css/NavBar.css';
import Logo from '../../images/logo_w_background.png';

export function NavBar() {
  return (

    <div className="navbar">
        <div className="navbar-left">
          <img src={Logo} className="navbar-logo" />
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
                className="fa-brands fa-facebook"
              ></a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/mit_ieee_acm/"
                className="fa-brands fa-instagram"
              ></a>
            </div>
            <div>
              <a
                href="https://medium.com/mit-ieee"
                className="fa-brands fa-medium"
              ></a>
            </div>
        </div>
    </div>

    
  );
};

export default NavBar;
