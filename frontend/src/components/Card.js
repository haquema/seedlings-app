import { Link } from "react-router-dom";
import { useState } from "react";
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
        <div className="card-img-top plant-img-container d-flex">
          <img src={plant.img} className="plant-img " alt={'plant'} />
        </div>

        <div className="card-body bg-light rounded plant-text-container">
          <h5 className="card-title text-start text-dark lead">{plant.name}</h5>
          <h6 className="card-subtitle text-start text-muted small">
            {plant.knownAs}
          </h6>
        </div>
        <div className="card-footer">
          <div className="row">
            <div className="col">
              <Link
                to={`/plants/${plant._id}`}
                className="btn btn-success btn-sm"
              >
                View details
              </Link>
            </div>
            <div className="col">
              <button onClick={(e) => handleGarden(plant._id, e)}>
                {updated ? "It's in your garden" : "Add to Garden"}

              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
