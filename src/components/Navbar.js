import { Link } from 'react-router-dom';

const Navbar = (navigate) => {
  // const logout = () => {
  //   window.localStorage.removeItem('token');
  //   window.localStorage.removeItem('user_id');
  //   // navigate('/login');
  // };

  // const user_id = window.localStorage.getItem('user_id');

  return (
    <nav className="navbar navbar-expand-lg bg-success border me-auto p-3">
      <div className="container">
        <Link to="#" className="navbar-brand ">
          Seedlings
        </Link>
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
            <Link to="#" className=" btn btn-success mx-1 my-2">
              Feed
            </Link>
            <Link to="#" className=" btn btn-success mx-1 my-2">
              My Garden Patch
            </Link>
            <Link to="#" className=" btn btn-success mx-1 my-2">
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
