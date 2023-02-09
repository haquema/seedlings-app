import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from "../components/signup-background-2.jpeg"


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password }),
    });

    const data = await response.json();

    if (response.status !== 200) {
      setError(data.error);
      navigate('/login');
    } else {


      window.localStorage.setItem("token", data.token);
      window.localStorage.setItem("user_id", data.user._id);
      window.localStorage.setItem("user_name", data.user.username);
      window.localStorage.setItem("email", data.user.email);
      navigate("/home");
    }
  };

  return (
    
    <>
      <section className="container-fluid bg-light p-5">
        <h3 id="info-bar" className="text-center">
          Login
        </h3>
      </section>

      <div className="container-fluid">
        <div className="row">
        <div className="col-lg-6 bg-success d-flex justify-content-center align-items-center">
      <img src={image} alt="Login Illustration" />
    </div>
          <div className="col-lg-6 border shadow rounded p-5 bg-light d-flex align-items-center">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  aria-describedby="passwordNameHelp"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Log in
              </button>
              {error && <p>{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
