import React, { useEffect, useState } from 'react';
import './Vila9.css'; 
import foto3 from "../images/foto3.jpg";

const Vila9 = () => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);

        fetch('http://localhost:5000/get-image-url')
            .then((response) => response.json())
            .then((data) => {
                setImageUrl(data.imageUrl); 
            });
    }, []);

    return (
        <div className="luxury-rooftop-penthouse">
            <header className="header">
                <h1>Luxury Rooftop Penthouse</h1>
                <p>Exclusive Living with Panoramic Views</p>
            </header>

            <section className="apartment-details">
                <h2>About the Penthouse</h2>
                <p>
                    Experience the ultimate in luxury with our rooftop penthouse, offering stunning city and skyline views. With an open-concept layout and exquisite design, it is the epitome of modern living.
                </p>
                <h3>Features:</h3>
                <ul>
                    <li>5 Lavish Bedrooms</li>
                    <li>4 Spa-like Bathrooms</li>
                    <li>Gourmet Kitchen with City Views</li>
                    <li>Open-concept Living Area</li>
                    <li>Private Rooftop Garden and Lounge</li>
                    <li>Exclusive Concierge Service</li>
                </ul>
            </section>

            <section className="gallery">
                <h2>Gallery</h2>
                <div className="image-grid">
                    <div className="image-container">
                        <img src={foto3} alt="Luxury Rooftop Penthouse Exterior" className="property-image"/>
                        <div className="image-details">
                            <h3>Penthouse Exterior</h3>
                            <p>Stunning exterior with expansive rooftop garden and panoramic views.</p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={imageUrl || "http://localhost:5000/images/slide1.jpg"} alt="Living Room" className="top-image"/>
                        <div className="image-details">
                            <h3>Living Room</h3>
                            <p>Spacious living room designed for relaxation, with views of the city skyline.</p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="http://localhost:5000/images/slide2.jpg" alt="Master Bedroom" className="top-image"/>
                        <div className="image-details">
                            <h3>Master Bedroom</h3>
                            <p>Modern bedroom with city views and an elegant design.</p>
                        </div>
                    </div>

                    <div className="image-container">
                        <img src="http://localhost:5000/images/slide3.jpg" alt="Kitchen" className="top-image"/>
                        <div className="image-details">
                            <h3>Gourmet Kitchen</h3>
                            <p>State-of-the-art kitchen with premium appliances and sleek design.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="rooftop-amenities">
                <h2>Exclusive Amenities</h2>
                <div className="amenities-list">
                    <div className="amenity">
                        <h3>Private Rooftop Garden</h3>
                        <p>Relax in your own rooftop garden, complete with luxurious seating and greenery.</p>
                    </div>
                    <div className="amenity">
                        <h3>Smart Home Integration</h3>
                        <p>Control lighting, temperature, and security at your fingertips with smart home technology.</p>
                    </div>
                    <div className="amenity">
                        <h3>Exclusive Concierge Service</h3>
                        <p>Enjoy personalized service for all your needs, from reservations to housekeeping.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Vila9;
