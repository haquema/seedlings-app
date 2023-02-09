import React, { useEffect, useState } from 'react';
import '../components/GardenCard.css';
import GardenCard from '../components/GardenCard';

const Garden = () => {
  const [garden, setGarden] = useState([]);
  const user = window.localStorage.getItem('user_id');
  const [updated, setUpdated] = useState(false);
  const name = window.localStorage.getItem("user_name");
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:5000/garden/${user}`)
      .then((response) => response.json())
      .then((data) => {
        setGarden(data.garden);
        setLoading(false)
        setUpdated(false);
      
      })
      .catch((err) => console.error(err));
  }, [updated]);

  return (
    <>
    <section className="container-fluid bg-light p-5">
    <h3 id="info-bar" className="text-center">
      {loading ? 'Loading...' : garden.length !== 0 ? `${name}'s Virtual Garden` : 'You have nothing in your garden, add some plants!'}
    </h3>
  </section>

      <section
        id="main-container"
        className="container-fluid text-center shadow-lg bg-success p-5"
      >
        {garden.length !== 0 && (
          <div
            id="card-container"
            className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4 m-5 pb-4 justify-content-start bg-light rounded"
          >
            {garden.map((plant) => (
              <GardenCard
                plant={plant}
                key={plant._id}
                setUpdated={setUpdated}
                setGarden={setGarden}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Garden;
