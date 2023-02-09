import React from "react";
import "ai-taxonomist";
import "../components/Card.css";

const Identification = () => {
  return (
    <>
      <section className="container-fluid bg-light p-5">
        <h2 id="info-bar" className="text-center">
          &#128300; Identify a Plant
        </h2>
      </section>

      <section
        id="main-container"
        className="container-fluid  shadow bg-success p-5"
      >
        <div className="row justify-content-center">
          <div className="col-lg-6 bg-light rounded p-5">
            <h3 className="text-dark font-weight-bold mb-4">
              Plant Identification Guide
            </h3>
            <p className="text-dark font-size-large mb-4">
              Follow these simple steps to identify your plant:
            </p>
            <ol className="text-dark font-size-medium mb-4">
              <li>
                Click the "Upload Image" button to select an image of your plant
              </li>
              <li>Wait for the image to be analysed</li>
              <li>
                View the results and select the most likely match for your plant
              </li>
            </ol>
            <ai-taxonomist apiKey="2b10Rwo6nfbkpgoPtQlsHNGhUe"></ai-taxonomist>
          </div>
        </div>
      </section>
    </>
  );
};
export default Identification;
