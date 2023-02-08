import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProfilePageTest = ({ navigate }) => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/${id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data.user);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [fullName, setFullName] = useState(user.fullName);
  const [address, setAddress] = useState(user.address);
  const [password, setPassword] = useState(user.password);

  const handleSubmit = async () => {
    const userData = { email, username, fullName, address, password };

    try {
      let response = await fetch(`http://localhost:5000/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setError('');
        // navigate(`/profiletest/${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="p-5 bg-light ">
        <div className="text-center">
          <h3>Current Details</h3>
          <div>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>Full Name: {user.fullName}</p>
            <p>Address: {user.address}</p>
          </div>
        </div>
      </section>

      <div className="container-fluid bg-success p-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 border shadow rounded p-5 bg-light">
            <h3 className="text-center">Update your details</h3>
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
                <label for="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  aria-describedby="userHelp"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="fullName" className="form-label">
                  Full name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  aria-describedby="fullNameHelp"
                  placeholder="Enter full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  aria-describedby="addressNameHelp"
                  placeholder="Enter address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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
                Save
              </button>
              {error && <p>{error}</p>}
            </form>
          </div>
        </div>
      </div>

      {/* <form id="update_form" onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Full Name"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          placeholder="Address"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit">Update</button>
        {error && <p>{error}</p>}
      </form> */}
    </>
  );
};

export default ProfilePageTest;
