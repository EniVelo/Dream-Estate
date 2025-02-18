import React, { useEffect, useState } from 'react';
import './Vila4.css'; 
import foto3 from "../images/foto3.jpg";

const Vila4 = () => {
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
        <div className="penthouse-suite">
            <header className="header">
                <h1>Penthouse Suite</h1>
                <p>Experience the pinnacle of luxury and elegance</p>
            </header>

            <section className="suite-details">
                <h2>About the Penthouse</h2>
                <p>
                    Welcome to the Penthouse Suite, a lavish retreat designed for those who appreciate sophistication, comfort, and breathtaking views. This suite offers top-tier amenities and unparalleled luxury.
                </p>
                <h3>Features:</h3>
                <ul>
                    <li>3 Luxurious Bedrooms</li>
                    <li>4 Elegant Bathrooms</li>
                    <li>Spacious Living and Dining Area</li>
                    <li>Private Rooftop Terrace</li>
                    <li>State-of-the-Art Kitchen</li>
                    <li>Panoramic Cityscape Views</li>
                </ul>
            </section>

            <section className="gallery">
                <h2>Gallery</h2>
                <div className="image-grid">
                    <div className="image-container">
                    <img
                            src={foto3} 
                            alt="Private Pool Villa"
                            className="property-image"
                        />
                        <div className="image-details">
                            <h3>Suite Interior</h3>
                            <p>Immerse yourself in ultimate luxury and modern elegance.</p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img
                           src="http://localhost:5000/images/slide1.jpg" 
                            alt="rooftop-terrace"
                            className="top-image"
                        />
                        <div className="image-details">
                            <h3>Rooftop Terrace</h3>
                            <p>Enjoy panoramic views and unwind in your private outdoor space.</p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img
                            src="http://localhost:5000/images/slide2.jpg"  
                            alt="luxury-living-room"
                            className="top-image"
                        />
                        <div className="image-details">
                            <h3>Living Room</h3>
                            <p>Spacious, elegant, and designed for relaxation.</p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img
                            src="http://localhost:5000/images/slide3.jpg" 
                            alt="master-bedroom"
                            className="top-image"
                        />
                        <div className="image-details">
                            <h3>Master Bedroom</h3>
                            <p>Wake up to stunning skyline views in your king-size bed.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="luxury-amenities">
                <h2>Exclusive Amenities</h2>
                <div className="amenities-list">
                    <div className="amenity">
                        <h3>24/7 Concierge Service</h3>
                        <p>Personalized assistance to cater to your every need.</p>
                    </div>
                    <div className="amenity">
                        <h3>Private Spa & Sauna</h3>
                        <p>Indulge in relaxation and wellness within your own suite.</p>
                    </div>
                    <div className="amenity">
                        <h3>Gourmet In-Suite Dining</h3>
                        <p>Enjoy exquisite meals prepared by world-class chefs.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Vila4;
