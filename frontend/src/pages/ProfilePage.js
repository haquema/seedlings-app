import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage = ({ navigate }) => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [error, setError] = useState('');
  const name = window.localStorage.getItem('user_name');

  // const [username, setUsername] = useState(user.username);
  // const [email, setEmail] = useState(user.email);
  // const [fullName, setFullName] = useState(user.fullName);
  // const [address, setAddress] = useState(user.address);
  // const [password, setPassword] = useState(user.password);
  const [uData, setUData] = useState({});
  const [updated, setUpdated] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/${id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data.user);
        setUData({
          email: user.email,
          username: user.username,
          fullName: user.fullName,
          address: user.address,
          // password: user.password,
        });
        console.log(uData);
        setUpdated(false);
      })
      .catch((err) => console.error(err));
  }, [updated]);

  const handleChange = (e) => {
    setUData({ ...uData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const userData = { ...uData };
    console.log(uData);
    console.log(userData);

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
        setUpdated(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="p-5 bg-light ">
        <div className="text-center">
          <h3>My Account</h3>
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
                  name="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={uData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label for="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  id="username"
                  aria-describedby="userHelp"
                  placeholder="Enter username"
                  value={uData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label for="fullName" className="form-label">
                  Full name
                </label>
                <input
                  type="text"
                  name="fullName"
                  className="form-control"
                  id="fullName"
                  aria-describedby="fullNameHelp"
                  placeholder="Enter full name"
                  value={uData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label for="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  id="address"
                  aria-describedby="addressNameHelp"
                  placeholder="Enter address"
                  value={uData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  required
                  name="password"
                  type="password"
                  className="form-control"
                  id="password"
                  aria-describedby="passwordNameHelp"
                  placeholder="Enter password"
                  // value={uData.password}
                  onChange={handleChange}
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
    </>
  );
};

export default ProfilePage;
