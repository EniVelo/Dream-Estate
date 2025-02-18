import React, { useEffect, useState } from 'react';
import './Vila7.css'; 
import foto3 from "../images/foto3.jpg";

const Vila7 = () => {
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
        <div className="skyline-penthouse">
            <header className="header">
                <h1>Skyline Penthouse</h1>
                <p>Exclusive Living with Panoramic Views</p>
            </header>

            <section className="apartment-details">
                <h2>About the Penthouse</h2>
                <p>
                    Live in luxury with the best views of the skyline. This penthouse offers sophisticated design, state-of-the-art amenities, and unparalleled comfort.
                </p>
                <h3>Features:</h3>
                <ul>
                    <li>4 Expansive Bedrooms</li>
                    <li>3 Premium Bathrooms</li>
                    <li>Gourmet Kitchen</li>
                    <li>Open-plan Living Area</li>
                    <li>Private Roof Terrace</li>
                    <li>24/7 Security and Concierge</li>
                </ul>
            </section>

            <section className="gallery">
                <h2>Gallery</h2>
                <div className="image-grid">
                    <div className="image-container">
                        <img src={foto3} alt="Skyline Penthouse Exterior" className="property-image"/>
                        <div className="image-details">
                            <h3>Penthouse Exterior</h3>
                            <p>Enjoy the breathtaking skyline views from your private terrace.</p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={imageUrl || "http://localhost:5000/images/slide1.jpg"} alt="Living Room" className="top-image"/>
                        <div className="image-details">
                            <h3>Living Room</h3>
                            <p>Modern design with open spaces and panoramic views.</p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="http://localhost:5000/images/slide2.jpg" alt="Master Bedroom" className="top-image"/>
                        <div className="image-details">
                            <h3>Master Bedroom</h3>
                            <p>Relax and unwind with views of the skyline from your bed.</p>
                        </div>
                    </div>

                    <div className="image-container">
                        <img src="http://localhost:5000/images/slide3.jpg" alt="Kitchen" className="top-image"/>
                        <div className="image-details">
                            <h3>Gourmet Kitchen</h3>
                            <p>Fully equipped with high-end appliances for your culinary needs.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="skyline-amenities">
                <h2>Exclusive Amenities</h2>
                <div className="amenities-list">
                    <div className="amenity">
                        <h3>Private Rooftop</h3>
                        <p>Relax and entertain on your private rooftop terrace with stunning views.</p>
                    </div>
                    <div className="amenity">
                        <h3>Smart Home Features</h3>
                        <p>Control lighting, temperature, and security with your smartphone.</p>
                    </div>
                    <div className="amenity">
                        <h3>State-of-the-art Gym</h3>
                        <p>Stay fit in the private gym with the latest equipment.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Vila7;
