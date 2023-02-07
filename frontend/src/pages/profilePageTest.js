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

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { email, username, fullName, address };

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
        navigate(`/profiletest/${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container p-5">
        <div className="profile-details">
          <h3>Current Details</h3>
          <div>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>Full Name: {user.fullName}</p>
            <p>Address: {user.address}</p>
          </div>
        </div>
        <h3>Update your details</h3>
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
              placeholder="Email"
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
              placeholder="Username"
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
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="address" className="form-label">
              address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              aria-describedby="addressNameHelp"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
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
