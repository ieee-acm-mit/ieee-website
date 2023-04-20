import React from 'react';

interface PageProps {
  showContent: boolean;
}

const AboutPage: React.FC<PageProps> = ({ showContent }) => {
  return (
    <div>
      <h2>About me</h2>
      <p>I am a web developer.</p>
    </div>
  );
};

export default AboutPage;
