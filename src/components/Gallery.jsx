import React, { useState } from 'react';
import IMG from '../assets/Destination1.png'
import IMG2 from '../assets/Destination2.png'
import IMG3 from '../assets/Destination3.png'
import IMG4 from '../assets/Destination4.png'
import IMG5 from '../assets/Destination5.png'

const images = [
  { src: IMG, alt: 'Image 1' },
  { src: IMG2, alt: 'Image 2' },
  { src: IMG3, alt: 'Image 3' },
  { src: IMG4, alt: 'Image 4' },
  { src: IMG5, alt: 'Image 5' },
  { src: IMG5, alt: 'Image 5' },
];

function Gallery() {
  const [fullscreenImage, setFullscreenImage] = useState(null);

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
          src={image.src}
          alt={image.alt}
          onClick={() => openFullscreen(index)}
        />
      ))}

      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <div className="fullscreen-content">
            <img src={fullscreenImage.src} alt={fullscreenImage.alt} />
            <button onClick={closeFullscreen}>x</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;

