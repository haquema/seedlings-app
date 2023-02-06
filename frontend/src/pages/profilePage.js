import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProfilePage = ({navigate}) => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
 
  useEffect(() => {
    fetch(`http://localhost:5000/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setUser(data.user);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [fullName, setFullName] = useState(user.fullName);
  const [address, setAddress] = useState(user.address);


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userData = { email, username, fullName, address }
   
    try {
      let response = await fetch(`http://localhost:5000/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setError("")
        navigate(`/profile/${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="profile-details">
      <h3>Current Details</h3>
      <div>
        <p>Email: {user.email}</p>
        <p>Username: {user.username}</p>
        <p>Full Name: {user.fullName}</p>
        <p>Address: {user.address}</p>
      </div>
      <h3>Update your details</h3>
      <form id="update_form" onSubmit={handleSubmit}>
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
      </form>
    </div>
  );

}

export default ProfilePage;