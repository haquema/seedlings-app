import React from 'react';
import 'ai-taxonomist';
import '../components/Card.css';

const Identification = () => {
  return (
    <>
      <section className="container-fluid bg-light p-5">
        <h3 id="info-bar" className="text-center">
          AI Plant Identification
        </h3>
      </section>

      <section
        id="main-container"
        className="container-fluid text-center shadow bg-success p-5"
      >
        <div className="row justify-content-center">
          <div className="col-lg-6 bg-light rounded p-5">
            <p className="text-dark">
              To identify a plant, please follow these steps:
            </p>
            <ol>
              <li className="text-dark">
                Click the "Upload Image" button to select an image of your plant
              </li>
              <li className="text-dark">Wait for the image to be analysed</li>
              <li className="text-dark">
                View the results and select the most likely match for your plant
              </li>
              <br></br>
            </ol>
            <ai-taxonomist apiKey="2b10Rwo6nfbkpgoPtQlsHNGhUe"></ai-taxonomist>
          </div>
        </div>
      </section>
    </>
  );
};
export default Identification;
