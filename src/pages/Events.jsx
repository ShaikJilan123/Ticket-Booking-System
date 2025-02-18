import { useState } from 'react';
import EventList from '../components/EventList';
import BookingForm from '../components/BookingForm';

function Events({ events, onBook }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleBooking = (booking) => {
    onBook(booking);
    // Close modal after booking
    document.getElementById('bookingModal').classList.remove('show');
    document.body.classList.remove('modal-open');
    const modalBackdrop = document.querySelector('.modal-backdrop');
    if (modalBackdrop) {
      modalBackdrop.remove();
    }
  };

  return (
    <div className="events-page">
      <h1>Upcoming Events</h1>
      <EventList 
        events={events} 
        onSelectEvent={setSelectedEvent}
      />

      {selectedEvent && (
        <div className="modal fade" id="bookingModal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Book Tickets</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <BookingForm 
                  event={selectedEvent} 
                  onBook={handleBooking}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;
