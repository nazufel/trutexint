import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import wireedm01 from '../images/wire-edm-01.jpg'
import wireedm02 from '../images/wire-edm-02.jpg'
import wireedm03 from '../images/wire-edm-03.jpg'
 
const Carousel = () => {
    return (
      <CarouselProvider
        // interval to change slide in ms
        interval={3000}
        // toggle if the slide show progresses automatically
        isPlaying={true}
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <img src={ wireedm01 } alt="wire edm machine"/>
          </Slide>
          <Slide index={1}>
            <img src={ wireedm02 } alt="wire edm machine"/>
          </Slide>
          <Slide index={2}>
            <img src={ wireedm03 } alt="wire edm machine"/>            
          </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
}

export default Carousel;