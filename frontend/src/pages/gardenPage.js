import React, { useEffect, useState} from "react";

const Garden = () => {
  const [garden, setGarden] = useState([]);
  const user = window.localStorage.getItem("user_id");

  useEffect(() => {
    fetch(`http://localhost:5000/garden/${user}`)
      .then((response) => response.json())
      .then((data) => {
        setGarden(data.garden);
        console.log(data.garden);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="garden">
      {garden.map((plant, index) => (
        <div key={plant._id || index} className="plant">
          <h2>{plant.name}</h2>
          <img src={plant.img} alt={plant.name} />
          <p>{plant.description}</p>
          <p>Known as: {plant.knownAs}</p>
          <p>Habitat: {plant.habitat}</p>
          <p>Toxic to: {plant.toxicTo}</p>
        </div>
      ))}
    </div>
  );
};



export default Garden;