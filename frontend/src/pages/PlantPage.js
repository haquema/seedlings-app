import SectionSpacer from '../components/SectionSpacer';
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

  // useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '50b4c8e8c5msh92331c0007a8097p127bd3jsna3504c463ed2',
  //       'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com',
  //     },
  //   };

  //   fetch(`https://house-plants2.p.rapidapi.com/id/${_id}`, options)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setPlant(data);
  //       // console.log(plant['Height at purchase'].CM);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <>
      <SectionSpacer />

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
          <img src={plant.img} alt="plant" className="mt-5" />

          <p>Name: {plant.name}</p>

          <p>Also known as: {plant.knownAs}</p>

          <p>Description: {plant.description}</p>

          <p>Toxic to: {plant.toxicTo}</p>

          <img src={'/images/swisscheese.png'} alt="plantcareimg" />

          <img src={plant.careimg} alt="care" />

          <p>Minimum Temperature: {plant.minTemp}</p>

          <p>Maximum Temperature: {plant.maxTemp}</p>

          <p>Habitat: {plant.habitat}</p>

          <p>Pruning Instructions: {plant.pruning}</p>
        </div>
      </section>
    </>
  );
};

export default PlantPage;
