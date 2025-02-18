function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to Ticket Booking System</h1>
      <p className="lead">
        Browse and book tickets for your favorite events!
      </p>
      <div className="mt-4">
        <a href="/events" className="btn btn-primary btn-lg">
          View Events
        </a>
      </div>
    </div>
  );
}

export default Home;
