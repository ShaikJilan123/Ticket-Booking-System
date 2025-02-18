function EventList({ events, onSelectEvent }) {
  const handleBookClick = (event) => {
    if (event.tickets > 0) {
      onSelectEvent(event);
      // Show the modal
      const modal = new window.bootstrap.Modal(document.getElementById('bookingModal'));
      modal.show();
    }
  };

  return (
    <div className="row">
      {events.map((event) => (
        <div className="col-md-4 mb-4" key={event.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{event.name}</h5>
              <p className="card-text">Date: {event.date}</p>
              <p className="card-text">Location: {event.location}</p>
              <p className="card-text">
                Tickets Available: {event.tickets}
              </p>
              <button 
                className={`btn ${event.tickets > 0 ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => handleBookClick(event)}
                disabled={event.tickets === 0}
              >
                {event.tickets > 0 ? 'Book Tickets' : 'Sold Out'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventList;
