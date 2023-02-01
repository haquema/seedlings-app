import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    });
    
    const json = await response.json()

    if (response.status !== 201) {
      setError(json.error)
      navigate('/user/login')
    } else {
      localStorage.setItem('user', JSON.stringify(json))
      navigate('/home/')
    }
  };


  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      <input 
        placeholder="Email address:"
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <input 
        placeholder='Password:'
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
      <button type="submit">Log in</button>
      {error && <p>{error}</p>}
    </form>
  )
}
export default Login