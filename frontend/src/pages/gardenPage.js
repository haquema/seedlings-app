import React, { useEffect, useState} from "react";

const Garden = () => {
  const [garden, setGarden] = useState([]);
  const user = window.localStorage.getItem('user_id')
//   const [token, setToken] = useState(window.localStorage.getItem('token'))

  useEffect(() => {
    fetch(`http://localhost:5000/garden/${user}`)
      .then((response) => response.json())
      .then((data) => {
        setGarden(data.garden);
        console.log(data.garden)
        // console.log(user)  
      })
      .catch((err) => console.error(err));
    }, []);

  return (
     <div id="post" key={garden._id}>
      <h1> Your Garden </h1>
      {garden.map((garden) => (
        <div id="post" key={garden._id}>
          <h1>{garden.name}</h1>
          <p>{garden.knownAs}</p>
        </div>
      ))}
    </div> 
  );
}



export default Garden;