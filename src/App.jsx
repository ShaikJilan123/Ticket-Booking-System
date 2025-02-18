import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Admin from './pages/Admin';
import './App.css';

function App() {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Concert",
      date: "December 25, 2023",
      location: "Main Hall",
      tickets: 100
    },
    {
      id: 2,
      name: "Theater Play",
      date: "January 15, 2024",
      location: "City Theater",
      tickets: 50
    },
    {
      id: 3,
      name: "Comedy Show",
      date: "February 10, 2024",
      location: "Laugh Lounge",
      tickets: 75
    }
  ]);

  const [bookings, setBookings] = useState([]);

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const handleBook = (booking) => {
    setBookings([...bookings, booking]);
    // Update available tickets
    setEvents(events.map(event => 
      event.id === booking.eventId 
        ? {...event, tickets: event.tickets - booking.ticketCount}
        : event
    ));
  };

  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/events" 
            element={
              <Events 
                events={events} 
                onBook={handleBook} 
              />
            } 
          />
          <Route 
            path="/admin" 
            element={
              <Admin 
                onAddEvent={handleAddEvent} 
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
