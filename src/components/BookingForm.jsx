import { useState } from 'react';

function BookingForm({ event, onBook }) {
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    ticketCount: 1
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (bookingDetails.ticketCount > event.tickets) {
      setError(`Only ${event.tickets} tickets available`);
      return;
    }

    onBook({
      eventId: event.id,
      ...bookingDetails
    });
    setBookingDetails({
      name: '',
      email: '',
      ticketCount: 1
    });
    setError('');
  };

  return (
    <div className="booking-form">
      <h2>Book Tickets for {event.name}</h2>
      <p>Tickets Available: {event.tickets}</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            className="form-control"
            value={bookingDetails.name}
            onChange={(e) => setBookingDetails({...bookingDetails, name: e.target.value})}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={bookingDetails.email}
            onChange={(e) => setBookingDetails({...bookingDetails, email: e.target.value})}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Number of Tickets</label>
          <input
            type="number"
            className="form-control"
            min="1"
            max="10"
            value={bookingDetails.ticketCount}
            onChange={(e) => setBookingDetails({...bookingDetails, ticketCount: e.target.value})}
            required
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
