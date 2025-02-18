import { useState } from 'react';

function Admin({ onAddEvent }) {
  const [newEvent, setNewEvent] = useState({
    name: '',
    date: '',
    location: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent({
      ...newEvent,
      id: Date.now()
    });
    setNewEvent({
      name: '',
      date: '',
      location: ''
    });
  };

  return (
    <div className="admin-page">
      <h1>Admin Panel</h1>
      <div className="mt-4">
        <h3>Add New Event</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Event Name</label>
            <input
              type="text"
              className="form-control"
              value={newEvent.name}
              onChange={(e) => setNewEvent({...newEvent, name: e.target.value})}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-control"
              value={newEvent.date}
              onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              value={newEvent.location}
              onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
