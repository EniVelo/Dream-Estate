import React, { useEffect, useState } from 'react';
import './Vila5.css'; 
import foto3 from "../images/foto3.jpg";


const Vila5 = () => {
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
        <div className="luxury-city-apartment">
            <header className="header">
                <h1>Luxury City Apartment</h1>
                <p>Modern Living in the Heart of the City</p>
            </header>

            <section className="apartment-details">
                <h2>About the Apartment</h2>
                <p>
                    Experience a stylish and luxurious stay at our high-end city apartment. Enjoy breathtaking skyline views, premium furnishings, and state-of-the-art amenities.
                </p>
                <h3>Features:</h3>
                <ul>
                    <li>3 Elegant Bedrooms</li>
                    <li>2 Designer Bathrooms</li>
                    <li>Fully Equipped Kitchen</li>
                    <li>Spacious Living Area</li>
                    <li>Private Balcony with City View</li>
                    <li>24/7 Concierge Service</li>
                </ul>
            </section>

            <section className="gallery">
                <h2>Gallery</h2>
                <div className="image-grid">
                    <div className="image-container">
                        <img src={foto3} alt="Luxury City Apartment" className="property-image"/>
                        <div className="image-details">
                            <h3>Apartment Exterior</h3>
                            <p>Experience city life with breathtaking views from your balcony.</p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="http://localhost:5000/images/slide1.jpg" alt="living-room" className="top-image"/>
                        <div className="image-details">
                            <h3>Living Room</h3>
                            <p>Elegant and modern, designed for comfort and style.</p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="http://localhost:5000/images/slide2.jpg" alt="bedroom-view" className="top-image"/>
                        <div className="image-details">
                            <h3>Master Bedroom</h3>
                            <p>Enjoy luxurious sleep with a stunning skyline view.</p>
                        </div>
                    </div>

                    <div className="image-container">
                        <img src="http://localhost:5000/images/slide3.jpg" alt="living-room" className="top-image"/>
                        <div className="image-details">
                            <h3>Kitchen</h3>
                            <p>Elegant and modern, designed for comfort and style.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="luxury-amenities">
                <h2>Exclusive Amenities</h2>
                <div className="amenities-list">
                    <div className="amenity">
                        <h3>Smart Home System</h3>
                        <p>Control lights, temperature, and security with voice commands.</p>
                    </div>
                    <div className="amenity">
                        <h3>Private Gym</h3>
                        <p>Stay fit with a state-of-the-art gym available exclusively for residents.</p>
                    </div>
                    <div className="amenity">
                        <h3>Rooftop Lounge</h3>
                        <p>Relax and unwind at the rooftop terrace with panoramic city views.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Vila5;
