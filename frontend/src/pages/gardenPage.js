import React, { useEffect, useState } from "react";
import "../components/Card.css";
const Garden = () => {
  const [garden, setGarden] = useState([]);
  const user = window.localStorage.getItem("user_id");

  const handleRemovePlant = (plantid) => {
    const user = window.localStorage.getItem("user_id");
    fetch(`http://localhost:5000/garden/${user}/${plantid}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setGarden(garden.filter((plant) => plant._id !== plantid));
      })
      .catch((err) => console.error(err));
  };

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
      <div className="row d-flex justify-content-center">
        {garden.map((plant, index) => (
          <div
            key={plant._id || index}
            className="card m-4 col-12 col-md-4 col-lg-4"
          >
            <img
              src={plant.img}
              className="card-img-top plant-image mx-auto d-block"
              alt={plant.name}
            />
            <div className="card-body">
              <h5 className="card-title text-center">{plant.name}</h5>
              <p className="card-text">{plant.description}</p>
              <p>Known as: {plant.knownAs}</p>
              <p>Habitat: {plant.habitat}</p>
              <p>Toxic to: {plant.toxicTo}</p>
            </div>
            <button onClick={() => handleRemovePlant(plant._id)}>
              Remove from Garden
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Garden;
