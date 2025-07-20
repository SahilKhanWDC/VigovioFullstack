import React, { useState, useEffect } from 'react'
import BookingForm from './components/BookingForm1'
import TravelItinerary from './components/TravelItinerary'

const App = () => {
  const [currentView, setCurrentView] = useState('form');

  useEffect(() => {
    // Check URL path to determine which view to show
    const path = window.location.pathname;
    if (path === '/itinerary') {
      setCurrentView('itinerary');
    } else {
      setCurrentView('form');
    }

    // Listen for popstate events (back/forward navigation)
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/itinerary') {
        setCurrentView('itinerary');
      } else {
        setCurrentView('form');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (currentView === 'itinerary') {
    return <TravelItinerary />;
  }

  return <BookingForm />;
}

export default App
