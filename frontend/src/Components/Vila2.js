import React, { useEffect, useState } from 'react';
import './Vila2.css'; 
import foto3 from "../images/foto3.jpg";

const Vila2 = () => {
    const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/get-image-url')
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.imageUrl); 
      });
  }, []);

  return (
    <div className="mountain-view-villa">
      <header className="header">
        <h1>Mountain View Villa</h1>
        <p>Your perfect getaway in the mountains</p>
      </header>

      <section className="villa-details">
        <h2>About the Villa</h2>
        <p>
          Welcome to the Mountain View Villa, nestled in the heart of the mountains. Experience breathtaking views, a blend of modern luxury and rustic charm, and a peaceful retreat surrounded by nature.
        </p>
        <h3>Features:</h3>
        <ul>
          <li>5 Spacious Bedrooms</li>
          <li>4 Modern Bathrooms</li>
          <li>Panoramic Mountain Views</li>
          <li>Outdoor Hot Tub</li>
          <li>Fireplace and Cozy Interiors</li>
        </ul>
      </section>

      <section className="gallery">
        <h2>Gallery</h2>
        <div className="image-grid">
          <div className="image-container">
            <img
              src={foto3} 
              alt="Mountain Villa"
              className="property-image"
            />
            <div className="image-details">
              <h3>Villa Exterior</h3>
              <p>Enjoy the beauty of the mountains right outside your door.</p>
            </div>
          </div>
          <div className="image-container">
            <img
              src="http://localhost:5000/images/slide1.jpg" 
              alt="mountain-view"
              className="top-image"
            />
            <div className="image-details">
              <h3>Outdoor Hot Tub</h3>
              <p>Relax and unwind in the hot tub with panoramic mountain views.</p>
            </div>
          </div>
          <div className="image-container">
            <img
              src="http://localhost:5000/images/slide3.jpg" 
              alt="living-room"
              className="top-image"
            />
            <div className="image-details">
              <h3>Living Room</h3>
              <p>A cozy and inviting space to gather with friends and family.</p>
            </div>
          </div>
          <div className="image-container">
            <img
              src="http://localhost:5000/images/slide2.jpg" 
              alt="bedroom-view"
              className="top-image"
            />
            <div className="image-details">
              <h3>Master Bedroom</h3>
              <p>Enjoy restful sleep with spectacular mountain views from your bed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="luxury-amenities">
        <h2>Exclusive Amenities</h2>
        <div className="amenities-list">
          <div className="amenity">
            <h3>Private Chef</h3>
            <p>Indulge in gourmet meals prepared by our personal chef, using fresh, local ingredients.</p>
          </div>
          <div className="amenity">
            <h3>Mountain Hiking Trails</h3>
            <p>Explore the stunning surroundings with private access to hiking trails.</p>
          </div>
          <div className="amenity">
            <h3>Yoga & Meditation</h3>
            <p>Embrace tranquility with private yoga and meditation sessions in the mountains.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vila2;
