import React from 'react';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class extends React.Component {
    render() {
      return (
        <CarouselProvider
          naturalSlideWidth={80}
          naturalSlideHeight={15}
          totalSlides={3}
          isPlaying={true}
          interval={5000}
        >
          <Slider>
            <Slide index={0} >I am the first Slide.</Slide>
            <Slide index={1}>I am the second Slide.</Slide>
            <Slide index={2}>I am the third Slide.</Slide>
            </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      );
    }
  }