import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      window.localStorage.setItem("user_name", data.user.name);
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

      <div className="container-fluid bg-success p-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 border shadow rounded p-5 bg-light">
            <h3 className="text-center">Enter your details</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label for="email" className="form-label">
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
                <label for="password" className="form-label">
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

    // <form className="login" onSubmit={handleSubmit}>
    //   <h3>Log In</h3>
    //   <input
    //     placeholder="Email"
    //     type="email"
    //     onChange={(e) => setEmail(e.target.value)}
    //     value={email}
    //   />
    //   <input
    //     placeholder="Password"
    //     type="password"
    //     onChange={(e) => setPassword(e.target.value)}
    //     value={password}
    //   />
    //   <button type="submit">Log in</button>
    //   {error && <p>{error}</p>}
    // </form>
  );
};
export default Login;
