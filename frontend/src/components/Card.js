import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Card.css';

const Card = ({ plant, setUpdated }) => {
  // const [updated, setUpdated] = useState(null);
  const token = window.localStorage.getItem('token');
  const user = window.localStorage.getItem('user_id');
  const [garden, setGarden] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (token) {
      fetch(`http://localhost:5000/${user}`)
        .then((response) => response.json())
        .then((data) => {
          setGarden(data.user.userGardenPatch);
          setIsSaved(garden.includes(plant._id));
        })
        .catch((err) => console.error(err));
    }
  }, [token, user, plant._id]);

  useEffect(() => {
    if (garden) {
      setIsSaved(garden.includes(plant._id));
    }
  }, [garden, plant._id]);

  const handleGarden = async (plant_id, event) => {
    event.preventDefault();
    if (token) {
      if (garden.includes(plant._id)) {
        console.log('plant already in garden');
      } else {
        fetch(`http://localhost:5000/garden/${user}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            plant_id: `${plant_id}`,
          }),
        }).then((response) => {
          setGarden([...garden, plant_id]);
          setIsSaved(true);
          setUpdated(true);
        });
      }
    } else {
      alert('Please log in to add a plant to your garden');
      window.location.href = '/login';
    }
  };
  return (
    <div className="col">
      <div className="card h-100 shadow border justify-content-center">
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
                View details &#128270;
              </Link>
            </div>
            <div className="col">
              {isSaved ? (
                <button
                  onClick={(e) => handleGarden(plant._id, e)}
                  className="btn btn-sm btn-secondary"
                  disabled
                >
                  In your garden
                </button>
              ) : (
                <button
                  onClick={(e) => handleGarden(plant._id, e)}
                  className="btn btn-sm btn-success"
                >
                  Add to garden &#129293;
                </button>
              )}

              {/* <button
                onClick={(e) => handleGarden(plant._id, e)}
                className="btn btn-sm btn-success"
              >
                {isSaved ? 'In your garden' : 'Add to Garden'}
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
