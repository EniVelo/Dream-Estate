import React, { useEffect, useState } from 'react';
import './Vila8.css'; 
import foto3 from "../images/foto3.jpg";

const Vila8 = () => {
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
        <div className="ocean-view-penthouse">
            <header className="header">
                <h1>Ocean View Penthouse</h1>
                <p>Luxury Living with Breathtaking Ocean Views</p>
            </header>

            <section className="apartment-details">
                <h2>About the Penthouse</h2>
                <p>
                    Experience unparalleled luxury and comfort in this stunning ocean view penthouse. Wake up to panoramic ocean vistas and enjoy modern, spacious living in an idyllic coastal setting.
                </p>
                <h3>Features:</h3>
                <ul>
                    <li>4 Expansive Bedrooms</li>
                    <li>3 Spa-inspired Bathrooms</li>
                    <li>Gourmet Kitchen with Ocean Views</li>
                    <li>Open-concept Living Area</li>
                    <li>Private Infinity Pool</li>
                    <li>24/7 Concierge and Security</li>
                </ul>
            </section>

            <section className="gallery">
                <h2>Gallery</h2>
                <div className="image-grid">
                    <div className="image-container">
                        <img src={foto3} alt="Ocean View Penthouse Exterior" className="property-image"/>
                        <div className="image-details">
                            <h3>Penthouse Exterior</h3>
                            <p>Take in the serene views of the ocean from your private terrace.</p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={imageUrl || "http://localhost:5000/images/slide1.jpg"} alt="Living Room" className="top-image"/>
                        <div className="image-details">
                            <h3>Living Room</h3>
                            <p>Spacious and elegant with expansive windows offering stunning ocean views.</p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="http://localhost:5000/images/slide2.jpg" alt="Master Bedroom" className="top-image"/>
                        <div className="image-details">
                            <h3>Master Bedroom</h3>
                            <p>Relax and rejuvenate with sweeping ocean views from your luxurious bed.</p>
                        </div>
                    </div>

                    <div className="image-container">
                        <img src="http://localhost:5000/images/slide3.jpg" alt="Kitchen" className="top-image"/>
                        <div className="image-details">
                            <h3>Gourmet Kitchen</h3>
                            <p>Modern, fully-equipped kitchen with an ocean view to inspire your culinary creations.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ocean-view-amenities">
                <h2>Exclusive Amenities</h2>
                <div className="amenities-list">
                    <div className="amenity">
                        <h3>Private Infinity Pool</h3>
                        <p>Relax in your private pool with stunning ocean views.</p>
                    </div>
                    <div className="amenity">
                        <h3>Smart Home Automation</h3>
                        <p>Control lighting, climate, and security at the touch of a button.</p>
                    </div>
                    <div className="amenity">
                        <h3>Oceanfront Gym</h3>
                        <p>Stay fit with a fully equipped gym overlooking the ocean.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Vila8;
