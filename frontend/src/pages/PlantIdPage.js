import React from 'react';
import 'ai-taxonomist';

//to do: configure thirdparty api for uploading and identifying plants 

const Identification = () => {
   
  return (
    <div>
      <h1>Plant Identification</h1>
      <p>To identify a plant, please follow these steps:</p>
      <ol>
        <li>Click the "Upload Image" button to select an image of your plant</li>
        <li>Wait for the image to be analyzed</li>
        <li>View the results and select the most likely match for your plant</li>
      </ol>
      <ai-taxonomist apiKey="2b10Rwo6nfbkpgoPtQlsHNGhUe"></ai-taxonomist>
    </div>
  );
};

export default Identification;





