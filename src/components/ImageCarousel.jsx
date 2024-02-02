import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const ImageCarousel = () => {
  const [picsInfo, setPicsInfo] = useState([]);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch('https://back.theeastcaravan.com/tours/pics/0/');
        const data = await response.json();
        setPicsInfo(data.pics_info);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const items = picsInfo.map((pic, index) => (
    <div key={index} className="image-container">
      <img
        src={`https://back.theeastcaravan.com${pic.mainimg}`}
        onDragStart={handleDragStart}
        alt={`Tour Image ${index + 1}`}
        className="carousel-image"
      />
    </div>
  ));

  const responsive = {
    0: { items: 1 },
    768: { items: 3 },
    1024: { items: 3 },
  };

  return (
    <div className="carousel-wrapper">
      <AliceCarousel
      autoPlayInterval={2000}
      autoPlay
      infinite
        mouseTracking
        items={items}
        stagePadding={{ paddingLeft: 20, paddingRight: 20 }}
        responsive={responsive}
      />
    </div>
  );
};

export default ImageCarousel;
