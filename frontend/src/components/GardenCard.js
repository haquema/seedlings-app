import './GardenCard.css';

const GardenCard = ({ plant, setUpdated, setGarden }) => {
  const token = window.localStorage.getItem('token');
  const user = window.localStorage.getItem('user_id');
  const email = window.localStorage.getItem('email');

  const handleReminder = (plantname, interval) => {
    fetch(`http://localhost:5000/garden/reminder`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, plantname, interval }),
    })
      .then((response) => {
        if (response.ok) {
          setUpdated(true);
          return;
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  const handleRemovePlant = () => {
    fetch(`http://localhost:5000/garden/${user}/${plant._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setGarden(data.garden);
        setUpdated(true);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="col">
      <div className="card  shadow border justify-content-center">
        <div className="card-img-top garden-img-container d-flex">
          <img src={plant.img} className="garden-img " alt={'plant'} />
        </div>
        <div className="card-body bg-light rounded garden-text-container">
          <h5 className="card-title text-start text-dark lead">{plant.name}</h5>
          <h6 className="card-subtitle text-start text-muted small">
            {plant.knownAs}
          </h6>

          <p className="card-text text-start small mt-2">
            <span className="fw-bold">Description:</span> {plant.description}
          </p>

          <p className="card-text text-start small">
            <span className="fw-bold">Know as:</span> {plant.knownAs}
          </p>
          <p className="card-text text-start small">
            <span className="fw-bold">Habitat:</span> {plant.habitat}
          </p>
          <p className="card-text text-start small">
            <span className="fw-bold">Toxic to:</span> {plant.toxicTo}
          </p>
        </div>
        <div className="card-footer">
          <div className="row justify-content-center">
            <div className="col-8">
              <h6 className="small">Remind me to water</h6>
              <select
                className="form-select text-center form-select-sm"
                onChange={(event) =>
                  handleReminder(plant.name, event.target.value)
                }
              >
                <option value="onceADay">Once a Day</option>
                <option value="twiceADay">Twice a Day</option>
                <option value="minute">Every Minute</option>
              </select>
            </div>
          </div>
        </div>

        <div className="card-footer">
          <div className="row">
            <div className="col">
              <button
                className="btn btn-success btn-sm"
                onClick={handleRemovePlant}
              >
                Remove from Garden
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GardenCard;
