import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user_id");
    window.localStorage.removeItem("user_name");
  };

  const user = window.localStorage.getItem("user_id");

  return (
    <nav className="navbar navbar-expand-lg bg-success border me-auto p-3">
      <div className="container">
        <div className="navbar-brand ">
          <img
            src={"/images/logo-w.png"}
            alt="logo"
            style={{ maxWidth: "200px" }}
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
              Home
            </Link>
            {window.localStorage.getItem("token") ? (
              <Link
                to={`/garden/${user}`}
                className="btn btn-success mx-1 my-2"
              >
                My Garden Patch
              </Link>
            ) : null}
            {window.localStorage.getItem("token") ? (
              <Link
                to="/login"
                className="btn btn-success mx-1 my-2"
                onClick={handleLogout}
              >
                Logout
              </Link>
            ) : (
              <>
                <Link to="/login" className="btn btn-success mx-1 my-2">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-success mx-1 my-2">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
