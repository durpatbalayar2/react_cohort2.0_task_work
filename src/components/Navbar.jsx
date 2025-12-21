import "remixicon/fonts/remixicon.css";
function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navleft">Horizon Courts</h1>

      <div className="nav-middle">
        <h1>About Us</h1>
        <h1>Services</h1>
        <h1>Coaches</h1>
        <h1>Events</h1>
        <h1>Contacts</h1>
      </div>

      <button>
        Book now <i class="ri-arrow-right-up-long-line"></i>
      </button>
    </div>
  );
}

export default Navbar;
