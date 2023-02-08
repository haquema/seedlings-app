import { useEffect, useState } from 'react';
import Card from '../components/Card';

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
      <section className="container-fluid bg-light p-4">
        <h3 id="info-bar" className="text-center mb-4">
          Welcome!
        </h3>
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
        <h3 id="info-bar" className="text-center">
          Plant List
        </h3>
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
