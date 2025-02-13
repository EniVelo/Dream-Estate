import React, { useState } from 'react';
import "./Footer.css";

const Footer = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <>
      <footer className="footer">
        <p>© 2025 DreamEstate. All rights reserved.</p>
        <p className="contact-info">
          Kontakt: <a href="mailto:info@dreamestate.com">info@dreamestate.com</a>
        </p>

        <div className="services">
          <a href="/about">About Us</a>
          <p className="terms-link" onClick={() => setIsTermsOpen(true)}>Terms & Conditions</p>
          <p className="privacy-link" onClick={() => setIsPrivacyOpen(true)}>Privacy Policy</p>
          <p className="services-link" onClick={() => setIsServicesOpen(true)}>Our Services</p>
        </div>

        <div className="logo-section">
          <h><b>DreamEstate</b></h>
        </div>
      </footer>

      {isTermsOpen && (
        <div className="modal-overlay" onClick={() => setIsTermsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Terms & Conditions</h2>
            <p>
              By using our services, you agree to abide by our terms and conditions.
              Please read them carefully.
            </p>
            <button className="close-btn" onClick={() => setIsTermsOpen(false)}>Close</button>
          </div>
        </div>
      )}

      {isPrivacyOpen && (
        <div className="modal-overlay" onClick={() => setIsPrivacyOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Privacy Policy</h2>
            <p>
              Your privacy is important to us. We ensure that all your data is kept secure.
              Please read our full privacy policy.
            </p>
            <button className="close-btn" onClick={() => setIsPrivacyOpen(false)}>Close</button>
          </div>
        </div>
      )}

      {isServicesOpen && (
        <div className="modal-overlay" onClick={() => setIsServicesOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Our Services</h2>
            <p>
              We offer a variety of services including luxury property sales, rentals, and more.
              Explore our full range of services.
            </p>
            <button className="close-btn" onClick={() => setIsServicesOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
