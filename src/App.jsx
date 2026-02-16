import React from 'react';
import { Hero, Features, BookingForm } from './components';
import './App.css';

/**
 * Main App Component
 * Sports Stadium Booking Platform Landing Page
 */
function App() {
  return (
    <div className="app">
      <Hero />
      <Features />
      <BookingForm />
      <footer className="footer">
        <p>&copy; 2026 Sports Stadium Booking Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
