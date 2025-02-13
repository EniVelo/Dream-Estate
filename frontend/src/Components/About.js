import React from 'react';
import './About.css';
import photo from "../images/photo.png";

const About = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1 className="about-us-title">Rreth Dream Estate</h1>
        <p className="about-us-description">
          Dream Estate është një platformë prestigjioze që ofron mundësi të shkëlqyera për të blerë, shitur dhe qarkulluar prona luksoze. 
          Ne punojmë për të siguruar që çdo klient të ketë një përvojë të paharrueshme dhe të personalizuar për çdo transaksion.
        </p>
        <div className="about-us-mission">
          <h2 className="about-us-subtitle">Misioni ynë</h2>
          <p className="about-us-description">
            Misioni i Dream Estate është të krijojmë mundësi të qarta dhe të besueshme për të gjithë ata që kërkojnë të investojnë ose të gjejnë prona të shkëlqyera. 
            Ne synojmë të sjellim transparencë, shërbim të shkëlqyer dhe një përvojë luksoze për përdoruesit tanë.
          </p>
        </div>
        <div className="about-us-values">
          <h2 className="about-us-subtitle">Vlerat tona</h2>
          <ul className="values-list">
            <li>Profesionalizëm</li>
            <li>Siguri dhe transparencë</li>
            <li>Shërbim personalizuar</li>
            <li>Inovacion dhe teknologji të avancuar</li>
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
