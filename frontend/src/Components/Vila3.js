import React, { useEffect, useState } from 'react';
import './Vila3.css'; 


const Vila3 = () => {
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
        <div className="private-pool-villa">
            <header className="header">
                <h1>Private Pool Villa</h1>
                <p>Your ultimate luxury escape</p>
            </header>

            <section className="villa-details">
                <h2>About the Villa</h2>
                <p>
                    Welcome to the Private Pool Villa, a sanctuary of comfort and relaxation. Enjoy ultimate privacy, modern amenities, and exquisite luxury right by your own private pool.
                </p>
                <h3>Features:</h3>
                <ul>
                    <li>5 Spacious Bedrooms</li>
                    <li>6 Modern Bathrooms</li>
                    <li>Private Infinity Pool</li>
                    <li>Fully Equipped Kitchen</li>
                    <li>Outdoor Lounge Area</li>
                    <li>Panoramic Ocean Views</li>
                </ul>
            </section>

            <section className="gallery">
                <h2>Gallery</h2>
                <div className="image-grid">
                    <div className="image-container">
                    <img
                            src="http://localhost:5000/images/slide4.jpg" 
                            alt="private-pool"
                            className="top-image"
                        />
                        <div className="image-details">
                            <h3>Villa Exterior</h3>
                            <p>Relax and unwind in your private luxury oasis.</p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img
                            src="http://localhost:5000/images/slide7.jpg" 
                            alt="private-pool"
                            className="top-image"
                        />
                        <div className="image-details">
                            <h3>Infinity Pool</h3>
                            <p>Swim in style with stunning views from your private infinity pool.</p>
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
                            <p>Modern and cozy, the perfect place to relax after a day of adventure.</p>
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
                            <p>Sleep peacefully with luxury bedding and mesmerizing views.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="luxury-amenities">
                <h2>Exclusive Amenities</h2>
                <div className="amenities-list">
                    <div className="amenity">
                        <h3>Private Chef</h3>
                        <p>Enjoy gourmet meals prepared just for you, using the freshest local ingredients.</p>
                    </div>
                    <div className="amenity">
                        <h3>Private Poolside Bar</h3>
                        <p>Refresh yourself with a wide variety of drinks at your own poolside bar.</p>
                    </div>
                    <div className="amenity">
                        <h3>Spa & Wellness</h3>
                        <p>Indulge in a full spa treatment in the privacy of your villa.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Vila3;
