import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

const Layout: React.FC = () => {
  const [showContent, setShowContent] = useState(true);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <>
      <NavBar />
      <button onClick={toggleContent}>{showContent ? 'Hide Content' : 'Show Content'}</button>
      <Outlet/>
    </>
  );
};

export default Layout;
