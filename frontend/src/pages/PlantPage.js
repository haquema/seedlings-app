import Navbar from '../components/Navbar';
import SearchSection from '../components/SearchSection';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PlantPage = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '50b4c8e8c5msh92331c0007a8097p127bd3jsna3504c463ed2',
        'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com',
      },
    };

    fetch(`https://house-plants2.p.rapidapi.com/id/${id}`, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPlant(data);
        // console.log(plant['Height at purchase'].CM);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <SearchSection />

      <section
        id="main-container"
        className="container-fluid text-center shadow-lg bg-success p-5"
      >
        <h3 id="info-bar" className="text-center">
          Plant Details
        </h3>
        <div
          id="plant-details-container"
          className="m-5 pb-4 justify-content-start bg-light rounded"
        >
          <img src={plant.Img} alt="plant" className="mt-5" />

          <p>Description: {plant.Description}</p>

          <p>Common Name: {plant['Common name']}</p>

          <p>Latin Name: {plant['Latin name']}</p>

          <p>Leaf Colour: {plant['Color of leaf']}</p>

          <p>Family: {plant.Family}</p>

          {plant.Use ? <p>Ideal Use: {plant.Use[0]}</p> : null}

          <p>Growth Speed: {plant.Growth}</p>

          <p>Light Tolerated: {plant['Light tolered']}</p>

          <p>Ideal Light: {plant['Light ideal']}</p>

          <p>Watering Instructions: {plant.Watering}</p>

          {plant['Height at purchase'] ? (
            <p>Height at Purchase: {plant['Height at purchase'].CM}cm</p>
          ) : null}

          {plant['Width at purchase'] ? (
            <p>Width at Purchase: {plant['Width at purchase'].CM}cm</p>
          ) : null}

          {plant['Height potential'] ? (
            <p>Height Potential: {plant['Height potential'].CM}cm</p>
          ) : null}

          {plant['Width potential'] ? (
            <p>Width Potential: {plant['Width potential'].CM}cm</p>
          ) : null}

          {plant['Temperature max'] ? (
            <p>Temperature Max: {plant['Temperature max'].C}°C</p>
          ) : null}

          {plant['Temperature min'] ? (
            <p>Temperature Min: {plant['Temperature min'].C}°C</p>
          ) : null}

          <p>Climate: {plant.Climat}</p>
        </div>
      </section>
    </>
  );
};

export default PlantPage;
