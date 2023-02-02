import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const FeedPage = () => {
  const [plants, setPlants] = useState([]);
  // const [updated, setUpdated] = useState(false);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '50b4c8e8c5msh92331c0007a8097p127bd3jsna3504c463ed2',
        'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com',
      },
    };

    fetch('https://house-plants2.p.rapidapi.com/all', options)
      .then((response) => response.json())
      .then((data) => {
        setPlants(data.slice(0, 12));
        console.log(plants);
      })
      .catch((err) => console.error(err));
  }, []);

  // useEffect(() => {
  //   fetch('http://localhost:5000/home', {
  //     method: 'GET',
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setPlants(data);
  //       console.log(data);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <>
      <section className="container-fluid bg-light p-4">
        <h3 id="info-bar" className="text-center mb-4">
          Welcome!
        </h3>
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-6 col-lg-4 mb-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control bg-light border shadow-lg"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-btn"
                id="search-input"
              />
              <button
                className="btn btn-success border text-light fw-bold"
                type="button"
                id="search-btn"
              >
                <i className="bi bi-search"></i>
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="main-container"
        className="container-fluid text-center shadow-lg bg-success p-5"
      >
        <h3 id="info-bar" className="text-center">
          Plant List
        </h3>
        <div
          id="card-container"
          className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 m-5 pb-4 justify-content-start bg-light rounded"
        >
          {plants.map((plant) => (
            <Card plant={plant} key={plant.id} />
          ))}
          {/* <Card /> */}
        </div>
      </section>
    </>
  );
};

export default FeedPage;
