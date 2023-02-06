import SectionSpacer from "../components/SectionSpacer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PlantPage = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/home/${id}`, {
      method: "GET",
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

          <p>Minimum Temperature: {plant.minTemp}</p>

          <p>Maximum Temperature: {plant.maxTemp}</p>

          <p>Habitat: {plant.habitat}</p>

          <p>Pruning Instructions: {plant.pruning}</p>
        </div>

        <img src={plant.careimg} alt="care" />
      </section>
    </>
  );
};

export default PlantPage;
