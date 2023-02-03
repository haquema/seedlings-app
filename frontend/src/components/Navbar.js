import { Link } from 'react-router-dom';

const Navbar = (navigate) => {
  const handleLogout = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user_id');
    window.localStorage.removeItem('user_name');
    // navigate('/login');
  };

  // const user_id = window.localStorage.getItem('user_id');

  return (
    <nav className="navbar navbar-expand-lg bg-success border me-auto p-3">
      <div className="container">
        <div className="navbar-brand ">
          <img
            src={'/images/logo-w.png'}
            alt="logo"
            style={{ maxWidth: '200px' }}
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link to="/home" className=" btn btn-success mx-1 my-2">
              Feed
            </Link>
            <Link to="" className="btn btn-success mx-1 my-2">
              My Garden Patch
            </Link>
            {window.localStorage.getItem('token') && (
              <Link
                to="/login"
                className="btn btn-success mx-1 my-2"
                onClick={handleLogout}
              >
                Logout
              </Link>
            )}
            {!window.localStorage.getItem('token') && (
              <Link to="/login" className="btn btn-success mx-1 my-2">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
