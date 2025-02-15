import React, { useState }  from 'react';
import './Contact.css';
import axios from 'axios';
const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    surname:"",
    email: "",
    comment: "",
  });

  // Funksioni per te perditesuar input-et
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Përshtatja e vleres ne formData per fushen qe po ndryshon
    });
  };
  

  // Funksioni per te derguar te dhenat ne backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    
      await axios.post("http://localhost:5000/addContact", formData)
      .then(res=>{console.log("Contact added")})
      .catch(err=>console.log(err))

    //   if (response.ok) {
    //     alert("Message sent successfully!");
    //     setFormData({ name: "",surname: "", email: "", comment: "" }); // Pastrimi i formës
    //   } else {
    //     alert("Failed to send message!");
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    //   alert("Something went wrong!");
    // }
  };
    
  return (
    <div className="contact-page-container">
      <div className="contact-info">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-description">
          If you have any questions or inquiries, feel free to reach out to us. We're here to help you!
        </p>
        <div className="contact-details">
          <p><strong>Email:</strong> info@dreamestate.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p><strong>Address:</strong> Tirana, Albania</p>
        </div>
      </div>

      <div className="contact-form">
        <h2 className="form-title">Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name"> Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" value={formData.name} 
              onChange={handleChange} 
              required />
          </div>
          <div className="form-group">
            <label htmlFor="name">Surname</label>
            <input type="text" id="surname" name="surname" placeholder="Your Surname" value={formData.surname} 
              onChange={handleChange} 
              required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Your Email" value={formData.email} 
              onChange={handleChange}  required />
          </div>
          <div className="form-group">
  <label htmlFor="message">Message</label>
  <textarea
    id="message"
    name="comment" 
    placeholder="Your Message"
    value={formData.comment} 
    onChange={handleChange} 
    required
  />
</div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>

      
      <br></br>
      <br></br>
      <br></br>
       
      <br></br>
      <br></br>
      <br></br>
      <div class="google-maps-container">
 {/*  Harta si sfond */}
 <iframe
  src="https://maps.google.com/maps?q=41.3275,19.8189&z=15&output=embed"
  style={{ border: 0, width: "100%", height: "100%" }}
  allowFullScreen=""
></iframe>


  {/* Linku per Google Maps */}
  <div class="google-maps-link">
    <a href="https://maps.app.goo.gl/qcxrSs89tfJN4nK5A" target="_blank" rel="noopener noreferrer">
    View Location on Google Maps
    </a>
    <br></br>
    <br></br>
<h><b>Where you’ll be</b></h>
  </div>
</div>
    </div>
  );
};

export default Contact;
