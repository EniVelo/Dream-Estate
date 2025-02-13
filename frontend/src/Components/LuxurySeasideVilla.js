import React from 'react';
import './Vila1.css'; 
import foto3 from "../images/foto3.jpg";



const LuxurySeasideVilla = () => {
  return (
    <div className="luxury-seaside-villa">
      <header className="header">
        <h1>Luxury Seaside Villa</h1>
        <p>Your dream beach house awaits</p>
      </header>

      <section className="villa-details">
        <h2>About the Villa</h2>
        <p>
          Welcome to the Luxury Seaside Villa, an exclusive retreat by the beach. This modern villa features an oceanfront view, exquisite architecture, and world-class amenities for an unforgettable vacation.
        </p>
        <h3>Features:</h3>
        <ul>
          <li>4 Luxurious Bedrooms</li>
          <li>3 Designer Bathrooms</li>
          <li>Infinity Pool with Ocean View</li>
          <li>Private Beach Access</li>
          <li>Smart Home Technology</li>
        </ul>
      </section>

      <section className="gallery">
        <h2>Gallery</h2>
        <div className="image-grid">
          <div className="image-container">
          <img
            src={foto3} 
            alt="Luxury Villa"
            className="property-image"
          />
            <div className="image-details">
              <h3>Villa Front View</h3>
              <p>This stunning view greets you as you approach the villa.</p>
            </div>
          </div>
          <div className="image-container">
            <img src="villa2.jpg" alt="Infinity Pool" />
            <div className="image-details">
              <h3>Infinity Pool</h3>
              <p>Enjoy endless relaxation with an ocean view in our infinity pool.</p>
            </div>
          </div>
          <div className="image-container">
            <img src="villa3.jpg" alt="Living Room" />
            <div className="image-details">
              <h3>Living Room</h3>
              <p>Modern and cozy, perfect for entertaining guests or unwinding.</p>
            </div>
          </div>
          <div className="image-container">
          <img src="villa3.jpg" alt="Living Room" />
            <div className="image-details">
              <h3>Bedroom with Ocean View</h3>
              <p>Sleep in comfort while gazing out at the stunning ocean horizon.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="luxury-amenities">
        <h2>Exclusive Amenities</h2>
        <div className="amenities-list">
          <div className="amenity">
            <h3>Private Chef</h3>
            <p>Indulge in exquisite cuisine prepared by our personal chef.</p>
          </div>
          <div className="amenity">
            <h3>Spa & Wellness</h3>
            <p>Relax in our private spa, offering massages, saunas, and wellness treatments.</p>
          </div>
          <div className="amenity">
            <h3>Concierge Service</h3>
            <p>Enjoy personalized services from our dedicated concierge team, available 24/7.</p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default LuxurySeasideVilla;


