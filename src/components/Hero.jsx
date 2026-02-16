import React from 'react';

/**
 * Hero Section Component
 * Displays the main headline, subheading, and primary CTA button
 */
const Hero = () => {
  const handleBookNow = () => {
    // Smooth scroll to booking form
    const bookingSection = document.getElementById('booking-form');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Book Your Favorite Sports Stadium Easily</h1>
        <p className="hero-subtitle">
          Quick and hassle-free booking for cricket, football, badminton, and more. 
          Find the perfect venue for your game in just a few clicks.
        </p>
        <button className="cta-button" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
