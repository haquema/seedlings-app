import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PlantPage = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/home/${id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setPlant(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);



  return (
    <>
      <section className="container-fluid bg-light p-5">
        <h3 id="info-bar" className="text-center">
        {plant.name}
        </h3>
      </section>

      <section
        id="main-container"
        className="container-fluid text-center shadow-lg bg-success p-5"
      >
        <div
          id="plant-details-container"
          className="my-5 p-5 d-flex justify-content-center bg-light rounded container"
        >
          <div className="card mb-3" style={{ maxWidth: '1100px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={plant.img} class="img-fluid" alt="..." />
                <img src={plant.careimg} class="img-fluid" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{plant.name}</h5>
                  <h6 className="text-muted small">
                    Also known as: {plant.knownAs}
                  </h6>
                  <p className="card-text text-start">
                    <p>
                      <span className="fw-bold">Description:</span>{' '}
                      {plant.description}
                    </p>

                    <p>
                      <span className="fw-bold">Toxic to: </span>
                      {plant.toxicTo}
                    </p>

                    <p>
                      <span className="fw-bold">Min Temp: </span>
                      {plant.minTemp}°C
                    </p>

                    <p>
                      <span className="fw-bold">Max Temp: </span>
                      {plant.maxTemp}°C
                    </p>

                    <p>
                      <span className="fw-bold">Habitat: </span>
                      {plant.habitat}
                    </p>

                    <p>
                      <span className="fw-bold">Pruning Instructions: </span>
                      {plant.pruning}
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlantPage;

