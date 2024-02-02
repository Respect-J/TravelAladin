import React, { useState, useEffect } from 'react';

const Gallery2 = () => {
  const [images, setImages] = useState([]);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://back.theeastcaravan.com/tours/pics/1/');
        const data = await response.json();
        setImages(data.pics_info);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const openFullscreen = (index) => {
    setFullscreenImage(images[index]);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img
          key={index}
          className="gallery__item"
          src={`https://back.theeastcaravan.com${image.mainimg}`}
          alt={`Image ${index + 1}`}
          loading="lazy" // Add lazy loading attribute
          onClick={() => openFullscreen(index)}
        />
      ))}

      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <div className="fullscreen-content">
            <img src={`https://back.theeastcaravan.com${fullscreenImage.mainimg}`} alt={`Fullscreen ${fullscreenImage.id}`} />
            <button onClick={closeFullscreen}>x</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery2;
