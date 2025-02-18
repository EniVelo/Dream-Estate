import React from 'react';
import './About.css';
import photo from "../images/photo.png";

const About = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1 className="about-us-title">About Dream Estate</h1>
        <p className="about-us-description">
        Dream Estate is a prestigious platform that offers excellent opportunities for buying, selling, and managing luxury properties.
        We work to ensure that every client has an unforgettable and personalized experience for every transaction.
        </p>
        <div className="about-us-mission">
          <h2 className="about-us-subtitle">Our mission</h2>
          <p className="about-us-description">
          Dream Estate's mission is to create clear and reliable opportunities for everyone looking to invest or find exceptional properties.
          We aim to bring transparency, excellent service, and a luxurious experience to our users.
          </p>
        </div>
        <div className="about-us-values">
          <h2 className="about-us-subtitle">Our values</h2>
          <ul className="values-list">
            <li>Professionalism</li>
            <li>Security and transparency</li>
            <li>Personalized service</li>
            <li>Innovation and advanced technology</li>
          </ul>
        </div>
      </div>
      <div className="about-us-image">
      <img
      src={photo} alt="My Image" 
      className="main-image"
    />
      </div>
    </div>
  );
};

export default About;
