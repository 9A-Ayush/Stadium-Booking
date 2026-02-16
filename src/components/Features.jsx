import React from 'react';

/**
 * Features Section Component
 * Displays key platform features in a card-based layout
 */
const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Easy Online Booking',
      description: 'Book your stadium in minutes with our simple and intuitive booking system.',
      icon: '📅'
    },
    {
      id: 2,
      title: 'Multiple Sports Options',
      description: 'Choose from cricket, football, badminton, and many other sports facilities.',
      icon: '⚽'
    },
    {
      id: 3,
      title: 'Real-Time Availability',
      description: 'Check live availability and get instant confirmation for your bookings.',
      icon: '⚡'
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <h2 className="features-title">Why Choose Us</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
