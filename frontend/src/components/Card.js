import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ plant }) => {
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
              <Link to="#" className="btn btn-success">
                Add plant
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
