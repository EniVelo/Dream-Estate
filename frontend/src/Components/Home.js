import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Card, CardContent } from '@mui/material';
import foto1 from '../images/foto1.jpg';
import foto2 from "../images/foto2.jpg";
import foto3 from "../images/foto3.jpg";
import foto4 from "../images/foto4.jpg";
import foto5 from "../images/foto5.jpg";
import foto6 from "../images/foto6.jpg";
import foto7 from "../images/foto7.jpg";
import foto8 from "../images/foto8.jpg";
import foto9 from "../images/foto9.jpg";
import foto10 from "../images/foto10.jpg";
import "./Home.css";
import "./Navbar.js";
import { Link } from 'react-router-dom';


    
const Home = () => {
  // Perdorimi i useState per te ruajtur te dhenat
  const [data, setData] = useState([]);

  // Funksioni per te marre te dhena nga backend
  const getData = async () => {
    try {
      const response = await Axios.get("http://localhost:5000/readItems"); 
      setData(response.data); // Ruani te dhenat ne gjendje
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error); 
    }
  }

  // Perdoret useEffect per te thirrur getData nje here pas ngarkimit të komponentit
  useEffect(() => {
    getData();
  }, []); 

  

  //const [searchTerm, setSearchTerm] = useState('');
  // const [searchType, setSearchType] = useState('rent');
  // const [budget, setBudget] = useState('');

  //const handleSearch = (e) => {
    //e.preventDefault();
    // Filter properties based on search term, type, and budget
    //const filteredProperties = data.filter(property => 
     // property.title === searchTerm
      //const matchesType = property.type.toLowerCase() === searchType.toLowerCase();
      // return matchesSearchTerm && matchesType ;
    //);

    // Console log to check filtered results
    //console.log('Filtered Properties:', filteredProperties);
    //return filteredProperties;
  //};
  const [searchTerm, setSearchTerm] = useState('');
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    // Kur të ndryshojnë pronat, filtro ato
    if (searchTerm) {
      const filtered = properties.filter(property =>
        property.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProperties(filtered);
    } else {
      setFilteredProperties(properties);
    }
  }, [searchTerm, properties]); // Përsëri ekzekutohet kur ndryshojnë searchTerm ose properties

  const handleSearch = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`http://localhost:5000/search?search=${searchTerm}`);
      const data = await response.json();
      
      // Vendos të dhënat që kthehen nga backend në state
      setProperties(data); 
    } catch (error) {
      console.error("Error searching properties:", error);
    }
  };
  
  
      return (
        <div className="app">
          
          <header className="header">
     
          <div className="hero-section">
  <div className="hero-text">
    <h2>Bringing Simplicity In The Real Estate Market</h2>
    <p>
      We simplify the process of purchasing new properties and tailor them to your needs.
    </p>
    <button 
      className="cta-button" 
      onClick={() => {
        document.getElementById('search-section')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      Start the Search
    </button>
  </div>
  <div className="hero-image">
    <img src={foto1} alt="My Image" />
  </div>
</div>

    </header>
    
    
    
    
    <section className="hero" id="search-section">
  <h2>Find your dream home!</h2>
  <p>Search for properties based on location, budget, style, and the type of room you desire.</p>

  <div className="search-container">
  <form onSubmit={handleSearch}>
      <input
      type="text"
      placeholder="Search Properties..."
      className="search-bar"
      value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
    />

 {/*   <select 
    className="search-type"
    value={searchType}
    onChange={(e) => setSearchType(e.target.value)} >
      <option value="rent">Room for Rent </option>
      <option value="buy">Room for Sale</option>
    </select>

    <input
      type="number"
      placeholder="Budget (€)"
      className="search-budget"
      value={budget}
          onChange={(e) => setBudget(e.target.value)}
    /> */}
    
    <button className="search-btn" onClick={handleSearch}>Search</button>
    </form>
     {/* Shfaq rezultatet e kerkimit */}
     <div className="search-results">
  {filteredProperties.length > 0 ? (
    filteredProperties.map((property) => (
      <div key={property._id}>
        <h3>{property.title}</h3>
        <p>{property.description}</p>
        <p>{property.price}</p>
      </div>
    ))
  ) : (
    <p>No results found</p>  
  )}
</div>

  </div>
</section>

    

    <div className="video-container">
  <video className="luxury-video" controls autoPlay loop muted>
    <source src="/video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>




    <>  
      <section id="luxury-villas" className="section new-homes"> </section>
      </>
    
    
      <div className="main-container">
  {/* Image */}
  <div className="image-container">
    <img
      src={foto1} alt="My Image" 
      className="main-image"
    />
  </div>

  {/* Text */}
  <div className="text-container">
    <h1 className="main-title">Hassle-Free Real Estate Solutions</h1>
    <p className="main-description">
      Discover a wide array of options for selling your home quickly and hassle free. Sell your home with no repairs, no agent commissions, in as is condition on your timeline. If you’re selling a house in poor condition, there’s no better way.
    </p>
    <button 
      className="main-button" 
      onClick={() => {
        document.getElementById('property-section')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      Learn More
    </button>
  </div>
</div>

<>  
      <section id="luxury-villas" className="section new-homes"> </section>
      </>

      <div id="property-section">
  <div className="grid-layout">
    {/* Image Section */}
    <div className="image-container">
      <div className="background-overlay" />
      <img
        src={foto2} alt="My Image" 
        className="secondary-image"
      />
    </div>
    
    {/* Content Section */}
    <Card className="property-card">
      <CardContent>
        <h2 className="property-title">Find Your Perfect Home</h2>
        <p className="property-description">
          Searching for your dream home? Tristan Buys Houses offers a wide array of options for homebuyers in Arkansas. With easy financing options, and a great network of real estate agents, we can help you find the perfect home that suits your needs. Start your home search with us today!
        </p>
        <div className="stats-container">
          <div>
            <h3 className="stat-value">1849</h3>
            <p className="stat-label">Offers Made</p>
          </div>
          <div>
            <h3 className="stat-value">100%</h3>
            <p className="stat-label">Satisfied Customers</p>
          </div>
          <div>
            <h3 className="stat-value">57</h3>
            <p className="stat-label">Deals Closed</p>
          </div>
        </div>
        <p className="additional-info">
          There is more on this, let's know more...
        </p>
      </CardContent>
    </Card>
  </div>
</div>


    
    
          
    <section id="luxury-villas" className="section new-homes">
      <h2 className="section-title">Luxury Villas</h2>
      <div className="property-list">
      
        <div className="property-card" >
        <Link to="/luxury-seaside-villa" className="luxury-link">
  Have a look...
</Link>
<br></br>
          <img
            src={foto3} 
            alt="Luxury Villa"
            className="property-image"
          />
          <div className="property-details">
            <span className="property-type">Villa</span>
            <h3 className="property-title">Luxury Seaside Villa</h3>
            <p className="property-price">€1500 / Night</p>
            <p className="property-info">500 sq. ft | 3 Bedrooms</p>
            <div className="property-rating">★★★★★</div>
          </div>
        </div>
         

        <div className="property-card">
        <Link to="/vila2" className="luxury-link">
  Have a look ...
</Link>
<br></br>

          <img
            src={foto4} 
            alt="Mountain View Villa"
            className="property-image"
          />
          <div className="property-details">
            <span className="property-type">Villa</span>
            <h3 className="property-title">Mountain View Villa</h3>
            <p className="property-price">€1200 / Night</p>
            <p className="property-info">450 sq. ft | 2 Bedrooms</p>
            <div className="property-rating">★★★★☆</div>
          </div>
        </div>
        <div className="property-card">
        <Link to="/vila3" className="luxury-link">
  Have a look ...
</Link>
<br></br>
          <img
            src={foto8} 
            alt="Private Pool Villa"
            className="property-image"
          />
          <div className="property-details">
            <span className="property-type">Villa</span>
            <h3 className="property-title">Private Pool Villa</h3>
            <p className="property-price">€1800 / Night</p>
            <p className="property-info">600 sq. ft | 4 Bedrooms</p>
            <div className="property-rating">★★★★★</div>
          </div>
        </div>
      </div>
    </section>
    
    <section id="premium-apartments" className="section new-homes">
      <h2 className="section-title">Premium Apartments</h2>
      <div className="property-list">
        <div className="property-card">
        <Link to="/vila4" className="luxury-link">
  Have a look ...
</Link>
<br></br>
          <img
            src={foto7} 
            alt="Penthouse Apartment"
            className="property-image"
          />
          <div className="property-details">
            <span className="property-type">Penthouse</span>
            <h3 className="property-title">Penthouse Suite</h3>
            <p className="property-price">€2000 / Night</p>
            <p className="property-info">800 sq. ft | 3 Bedrooms</p>
            <div className="property-rating">★★★★★</div>
          </div>
        </div>
        <div className="property-card">
        <Link to="/vila5" className="luxury-link">
  Have a look ...
</Link>
<br></br>
          <img
            src={foto2} 
            alt="Luxury City Apartment"
            className="property-image"
          />
          <div className="property-details">
            <span className="property-type">Apartment</span>
            <h3 className="property-title">Luxury City Apartment</h3>
            <p className="property-price">€800 / Night</p>
            <p className="property-info">350 sq. ft | 2 Bedrooms</p>
            <div className="property-rating">★★★★☆</div>
          </div>
        </div>
        <div className="property-card">
        <Link to="/vila6" className="luxury-link">
  Have a look ...
</Link>
<br></br>
          <img
            src={foto10} 
            alt="Modern Loft Apartment"
            className="property-image"
          />
          <div className="property-details">
            <span className="property-type">Loft</span>
            <h3 className="property-title">Modern Loft Apartment</h3>
            <p className="property-price">€1000 / Night</p>
            <p className="property-info">400 sq. ft | 2 Bedrooms</p>
            <div className="property-rating">★★★★☆</div>
          </div>
        </div>
      </div>
    </section>
    
    <section id="exclusive-penthouses" className="section new-homes">
      <h2 className="section-title">Exclusive Penthouse</h2>
      <div className="property-list">
        <div className="property-card">
        <Link to="/vila7" className="luxury-link">
  Have a look ...
</Link>
<br></br>
          <img
            src={foto9} 
            alt="Skyline Penthouse"
            className="property-image"
          />
          <div className="property-details">
            <span className="property-type">Penthouse</span>
            <h3 className="property-title">Skyline Penthouse</h3>
            <p className="property-price">€2500 / Night</p>
            <p className="property-info">900 sq. ft | 4 Bedrooms</p>
            <div className="property-rating">★★★★★</div>
          </div>
        </div>
        <div className="property-card">
        <Link to="/vila8" className="luxury-link">
  Have a look ...
</Link>
<br></br>
          <img
           src={foto5} 
            alt="Ocean View Penthouse"
            className="property-image"
          />
          <div className="property-details">
            <span className="property-type">Penthouse</span>
            <h3 className="property-title">Ocean View Penthouse</h3>
            <p className="property-price">€2200 / Night</p>
            <p className="property-info">750 sq. ft | 3 Bedrooms</p>
            <div className="property-rating">★★★★☆</div>
          </div>
        </div>
        <div className="property-card">
        <Link to="/vila9" className="luxury-link">
  Have a look ...
</Link> 
<br></br>
          <img
           src={foto6} 
            alt="Luxury Rooftop Penthouse"
            className="property-image"
          />
          <div className="property-details">
            <span className="property-type">Penthouse</span>
            <h3 className="property-title">Luxury Rooftop Penthouse</h3>
            <p className="property-price">€3000 / Night</p>
            <p className="property-info">1000 sq. ft | 5 Bedrooms</p>
            <div className="property-rating">★★★★★</div>
          </div>
        </div>
      </div>
    </section>
    
    
    
    
    
         <section id="special-offers" className="section">
            <h2>Why Dream Estate Is Better</h2>
            <p>Selling a home the traditional way can be stressful, time-consuming, and costly. However, Dream Estate offers an alternative way to sell.
No staging, no showings, no waiting months for a buyer. Just a fair cash offer and a quick closing on your schedule.
Plus, you’ll avoid realtor fees and closing costs, saving you thousands. For anyone wanting to sell their home fast, it’s a convenient, straightforward solution.</p>
          </section>
    
          
          <section id="blog" className="section">
            <h2>How It Works: Sell Your House Fast in Little Rock</h2>
            <article>
              <p>STEP 1: Get An Offer In 24-48 Hours
              Answer a few questions and snap some photos – no need to clean! We’ll review the information and calculate your offer.</p>
              <p>STEP 2: MEET WITH US AT YOUR HOME
              We can walk the property with you or send us photos and videos of the property. Once we view the property, we present you with a fair cash offer.</p>
           <p>STEP 3: PICK YOUR CLOSING DATE
           Close and move, stress-free Choose when you want to close. Get paid within days.</p>
            </article>
          </section>
    
          
          <section id="testimonials" className="section">
            <h2>Happy Clients, Happy Homes</h2>
            <blockquote>⭐⭐⭐⭐⭐ "Finding our dream home was easier than we ever imagined! The team was professional, helpful, and truly cared about our needs." – Sarah & James M.</blockquote>
          <blockquote>⭐⭐⭐⭐⭐ "Excellent service from start to finish! They guided us through every step and made the entire process stress-free." – David R.</blockquote>
          <blockquote>⭐⭐⭐⭐⭐ "We couldn’t be happier with our new home! The attention to detail and customer service were outstanding." – Emma T.</blockquote>
          <blockquote>⭐⭐⭐⭐⭐ "Professional, reliable, and always available to answer our questions. Highly recommend!" – John D.






</blockquote>
          </section>
    
        
    
    
    
    <>
    <section id="luxury-villas" className="section new-homes"> </section>
    
    {/* La Tarantella Section */}
    <section id="la-tarantella" className="la-tarantella-section">
      <div className="la-tarantella-intro">
        <h2>Trends in Modern Real Estate</h2>
        <p>
        Modern buyers are looking for homes with open layouts, energy efficiency, and smart technology. Properties in prime locations with outdoor spaces and home offices are among the most in-demand.
        </p>
       
      </div>
      <div className="la-tarantella-gallery">
        <img
          src={foto7} 
          alt="La Tarantella Interior"
          className="gallery-image"
        />
        <img
         src={foto5} 
          alt="Wedding Outdoor"
          className="gallery-image"
        />
        <img
          src={foto6} 
          alt="Historic Building"
          className="gallery-image"
        />
      </div>
    </section>
    
    </>
    




    
    
   </div>
  )
}

export default Home