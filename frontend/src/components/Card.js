import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Card.css";

const Card = ({ plant }) => {
  const [updated, setUpdated] = useState(null);
  const handleGarden = (plant_id, event) => {
    const token = window.localStorage.getItem("token");
    event.preventDefault();

    const user = window.localStorage.getItem("user_id");
    if (token) {
      fetch(`http://localhost:5000/garden/${user}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          plant_id: `${plant_id}`,
        }),
      }).then((response) => {
        setUpdated(true);
      });
    } else {
      alert("Please log in to add a plant to your garden");
      window.location.href = "/login";
    }
  };

  return (
    <div className="col">
      <div className="card h-100 shadow-lg border justify-content-center">
        <img src={plant.img} className="card-img-top plant-image" alt={1} />
        <div className="card-body bg-light rounded">
          <h5 className="card-title text-start text-dark lead">{plant.name}</h5>
          <p className="card-text text-start">
            <small className="text-muted">{plant.knownAs}</small>
          </p>
        </div>
        <div className="card-footer">
          <div className="row">
            <div className="col">
              <Link to={`/plants/${plant._id}`} className="btn btn-success">
                View details
              </Link>
            </div>
            <div className="col">
              <button onClick={(e) => handleGarden(plant._id, e)}>
                Add to Garden
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
