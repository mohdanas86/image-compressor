import React, { useState } from 'react';
import Compressor from 'compressorjs';

const App = () => {
  const [compressedImage, setCompressedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      new Compressor(file, {
        quality: 0.6, // Adjust the quality as needed
        success(result) {
          setCompressedImage(URL.createObjectURL(result));
        },
      });
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {compressedImage && (
        <div>
          <img src={compressedImage} alt="Compressed" />
        </div>
      )}
    </div>
  );
};

export default App;