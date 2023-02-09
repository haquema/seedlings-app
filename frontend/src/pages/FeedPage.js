import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Carousel from 'react-bootstrap/Carousel';
import '../../src/components/feed.css';

const FeedPage = () => {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [updated, setUpdated] = useState(null);

  const handleClear = () => {
    setSearchTerm('');
  };

  const handlePressEnter = (e) => {
    //it triggers by pressing the enter key
    if (e.key === 'Enter') {
      handleClear();
    }
  };

  useEffect(() => {
    fetch('http://localhost:5000/home', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        const filteredPlants = data.filter(
          (plant) =>
            plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            plant.knownAs.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setPlants(filteredPlants);
        setUpdated(false);
      })
      .catch((err) => console.error(err));
  }, [searchTerm, updated]);

  return (
    <>
      <section
        className="container-fluid bg-light p-4"
        style={{ padding: '50px' }}
      >
        <h2 id="info-bar" className="text-center mb-10">
          &#127793; The ultimate plant care companion &#127793;
        </h2>
        <Carousel className="text-center">
          <Carousel.Item>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                &#127757; We believe in the power of plants and their ability to
                bring happiness and health to our lives.{' '}
              </li>
            </ul>
          </Carousel.Item>
          <Carousel.Item>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                &#129516; Our database is filled with information about
                different plants, from their care instructions to their unique
                characteristics.
              </li>
            </ul>
          </Carousel.Item>
          <Carousel.Item>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                &#128167; Put your favorite plants in your virtual garden and
                schedule reminders to water them, so you never miss a day!
              </li>
            </ul>
          </Carousel.Item>
          <Carousel.Item>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                &#128248; Thanks to our AI plant identification tool, you can
                also snap a picture of any plant to discover it.
              </li>
            </ul>
          </Carousel.Item>
          <Carousel.Item>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                &#128154; Whether you're an experienced gardener or just
                starting out, Seedlings is here to help you grow.
              </li>
            </ul>
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="container-fluid bg-light p-4">
        <div className="row justify-content-center">
          <div className="col-9 col-sm-7 col-md-5 col-lg-3 mb-3">
            <div className="input-group">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control bg-light border shadow-lg"
                placeholder="Search for a plant.."
                aria-label="Search"
                aria-describedby="search-btn"
                id="search-input"
                onKeyDown={(e) => handlePressEnter(e)}
              />
              <button
                className="btn btn-success border text-light fw-bold"
                type="button"
                id="search-btn"
                onClick={handleClear}
              >
                <small>
                  <i className="fa-solid fa-square-xmark"></i> Clear
                </small>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="main-container"
        className="container-fluid text-center shadow-lg bg-success p-5"
      >
        <h3 id="info-bar" className="text-center"></h3>
        {plants.length !== 0 && (
          <div
            id="card-container"
            className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 m-5 pb-4 justify-content-start bg-light rounded"
          >
            {plants.map((plant) => (
              <Card plant={plant} key={plant._id} setUpdated={setUpdated} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default FeedPage;
