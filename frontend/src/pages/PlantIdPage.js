import React from "react";
import "ai-taxonomist";
import "../components/Card.css";

const Identification = () => {
  return (
    <div class="container">
    <div className="col-md-8 mx-auto">
      <div className="card h-100 shadow-lg border justify-content-center">
        <div className="card-header bg-primary text-white text-center">
          <h2 className="mt-3">AI Plant Identification</h2>
        </div>
        <div className="card-body bg-light rounded p-3">
          <p className="text-muted">
            To identify a plant, please follow these steps:
          </p>
          <ol>
            <li className="text-muted">
              Click the "Upload Image" button to select an image of your plant
            </li>
            <li className="text-muted">Wait for the image to be analysed</li>
            <li className="text-muted">
              View the results and select the most likely match for your plant
            </li>
            <br>
            </br>
          </ol>
          <ai-taxonomist apiKey="2b10Rwo6nfbkpgoPtQlsHNGhUe"></ai-taxonomist>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Identification;
