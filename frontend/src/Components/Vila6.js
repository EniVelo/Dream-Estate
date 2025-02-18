import React, { useEffect, useState } from 'react';
import './Vila6.css'; 
import foto3 from "../images/foto3.jpg";

const Vila6 = () => {
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
        <div className="modern-loft-apartment">
            <header className="header">
                <h1>Modern Loft Apartment</h1>
                <p>Urban Living with Industrial Charm</p>
            </header>

            <section className="apartment-details">
                <h2>About the Loft</h2>
                <p>
                    Discover the perfect blend of style and functionality in this spacious, modern loft. With open-plan living, exposed brick, and industrial finishes, this apartment offers a one-of-a-kind living experience.
                </p>
                <h3>Features:</h3>
                <ul>
                    <li>Open Floor Plan with High Ceilings</li>
                    <li>1 Spacious Bedroom</li>
                    <li>Modern Bathroom with Industrial Details</li>
                    <li>Fully Equipped Kitchen with Sleek Appliances</li>
                    <li>Exposed Brick Walls</li>
                    <li>Large Windows with City View</li>
                    <li>Private Terrace for Outdoor Living</li>
                </ul>
            </section>

            <section className="gallery">
                <h2>Gallery</h2>
                <div className="image-grid">
                    <div className="image-container">
                        <img src={foto3} alt="Modern Loft Apartment" className="property-image"/>
                        <div className="image-details">
                            <h3>Loft Exterior</h3>
                            <p>Enjoy urban views from your private terrace with a minimalist style.</p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="http://localhost:5000/images/slide1.jpg" alt="living-room" className="top-image"/>
                        <div className="image-details">
                            <h3>Living Area</h3>
                            <p>Open-plan space with modern furniture and industrial elements.</p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="http://localhost:5000/images/slide2.jpg" alt="bedroom-view" className="top-image"/>
                        <div className="image-details">
                            <h3>Bedroom</h3>
                            <p>Enjoy a comfortable retreat with large windows letting in natural light.</p>
                        </div>
                    </div>

                    <div className="image-container">
                        <img src="http://localhost:5000/images/slide3.jpg" alt="kitchen" className="top-image"/>
                        <div className="image-details">
                            <h3>Kitchen</h3>
                            <p>Modern design with industrial flair and top-of-the-line appliances.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="modern-amenities">
                <h2>Exclusive Features</h2>
                <div className="amenities-list">
                    <div className="amenity">
                        <h3>Smart Home Technology</h3>
                        <p>Control lighting, temperature, and security from your smartphone.</p>
                    </div>
                    <div className="amenity">
                        <h3>Private Rooftop Terrace</h3>
                        <p>Enjoy your own outdoor space with city views and room for entertaining.</p>
                    </div>
                    <div className="amenity">
                        <h3>High-Speed Internet</h3>
                        <p>Stay connected with fast internet for both work and leisure.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Vila6;
