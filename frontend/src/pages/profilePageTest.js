import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddForm from "../components/addForm";
import { Form, Button } from "react-bootstrap";

const ProfilePageTest = ({navigate}) => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
 
  useEffect(() => {
    fetch(`http://localhost:5000/${id}`, {
      method: "GET",
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
        navigate(`/profiletest/${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="profile-details">
      <h3>Current Details</h3>
      <div>
        <p>Email: {user.email}</p>
        <p>Username: {user.username}</p>
        <p>Full Name: {user.fullName}</p>
        <p>Address: {user.address}</p>
      </div>
      <h3>Update your details</h3>
    </div>

    <AddForm user={ user }/>
    </>
  );

}

export default ProfilePageTest;