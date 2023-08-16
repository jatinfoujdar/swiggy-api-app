import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CarouselImages } from '../../utils/constants.js';
import { Carousel } from 'react-responsive-carousel';

// Remove any duplicate imports or declarations

const CarouselImg = () => {
  return (
  <Carousel>
      {CarouselImages.map((image) => (
        <div key={image.id}>
          <img src={image.url} alt={`Image ${image.id}`} />
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselImg;
