import React, { useEffect, useState } from "react";
import "../components/Card.css";
const Garden = () => {
  const [garden, setGarden] = useState([]);
  const user = window.localStorage.getItem("user_id");
  const [updated, setUpdated] = useState([])

  const handleRemovePlant = (plantid) => {
    const user = window.localStorage.getItem("user_id");
    fetch(`http://localhost:5000/garden/${user}/${plantid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setUpdated(true)
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        setGarden(data.garden);
        setUpdated(false)
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetch(`http://localhost:5000/garden/${user}`)
      .then((response) => response.json())
      .then((data) => {
        setGarden(data.garden);

      })
      .catch((err) => console.error(err));
  },[user,updated]);

  return (
    <div className="garden">
      {garden.length ? (
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
      ) : (
        <div className="text-center">
          <div>
            <h2>You have nothing in your garden, add some plants! </h2>
            </div>
        </div>
      )}
    </div>
  );
};

export default Garden;
