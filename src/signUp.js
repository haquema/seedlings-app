import { useState } from "react";

const Signup = ({navigate}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { username, password, email, fullName, address };

    try {
      const response = await fetch("/signup", {
        method: "POST",
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
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="profile-details">
      <form id="signup_form" onSubmit={handleSubmit}>
        <input
          required
          placeholder="Username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          required
          placeholder="Password"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          required
          placeholder="Full Name"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          required
          placeholder="Email"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          placeholder="Address"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit">Sign up</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
