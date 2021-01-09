import React from 'react';

function AboutPage() {
  return (
    <div className="about-page__container">
      <p>
        Civic Alley is a tool for citizens looking for more agency in their location. With this map based platform
        we hope to reinvent what it means to be a part of a community. Our goal is to provide more access to public
        knowledge for people throughout the United States.
      </p>
      <div className="about-page__section">
        <h2>WIDESPREAD ACCESSIBLE CIVIC INFO</h2>
        <p>(Find Your Local Representatives and Budget)</p>
        <p>
          Our geographical platform details critical information regarding your local area. Previously hard to find
          and scattered over various government websites, we have made this vital civic data more accessible. Civic
          Alley puts everything you need to know about your local government in one place.
        </p>
      </div>
      <h2>BUILDING SUSTAINABLE COMMUNITIES</h2>
      <p>(Local Community Organizations and Events)</p>
      <p>
        Unsure of how to address a problem in your area? Looking for like minded neighbors? Or, are you simply
        looking for a bite to eat in your locale? From your local community organizations to neighborhood
        businesses, Civic Alley expands how you can get to know and meaningfully support your surroundings.
      </p>
      <h2>CONNECTING KNOWLEDGE</h2>
      <p>
        Everyday we are learning more about the importance of community. Everyone deserves the right to know
        about the public resources available to them. Townie has the ability to help bring neighbors and
        communities closer together.
      </p>
      <footer className="about-page__attribution">
        <p>
          Civic Alley is a project of the BY &amp; BY Design Collaborative.
          For more information, click <a href={`https://drive.google.com/file/d/1JBGdB1d8zzTdpR4-NcpJR9_nnTnSiVTb/view?usp=sharing`}>here.</a>
        </p>
        <p>
          Email: <a href={`mailto:xandxandxandx@gmail.com`}>xandxandxandx@gmail.com</a>
        </p>
      </footer>
    </div>
  );
}

export default AboutPage;
