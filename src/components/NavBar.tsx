import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

const NavBar: React.FC = () => {
  return (
    <nav>
      <h1> alfknaldnlafnknl</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* <li>
          <Link to="/portfolio">Portfolio</Link>
        </li> */}
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default NavBar;
