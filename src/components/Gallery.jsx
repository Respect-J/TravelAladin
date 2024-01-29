import React from 'react';
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
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img
          key={index}
          className="gallery__item"
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
}

export default Gallery;
