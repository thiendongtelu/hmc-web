import React from "react";
import { Carousel } from "antd";

import CarouselItem from "../../components/carousel-item/carousel-item.component";

import carouselFirst from "../../assets/image/carousel/carousel-first.jpg";
import carouselSecond from "../../assets/image/carousel/carousel-second.jpg";
import carouselThird from "../../assets/image/carousel/carousel-third.jpg";

import './carousel.style.scss';

const CarouselContainer = () => {
  return (
    <div className="carousel">
      <Carousel autoplay effect="fade" dotPosition='top'>
        <CarouselItem
          bg={carouselFirst}
          title="Slide 2"
          sub="lorem issum abcd nepifnepw vrnwgnroq fdhbfew fewhgnew"
        />

        <div>
          <CarouselItem
            bg={carouselSecond}
            title="Slide 3"
            sub="lorem issum abcd nepifnepw vrnwgnroq fdhbfew fewhgnew"
          />
        </div>

        <div>
          <CarouselItem
            bg={carouselThird}
            title="Slide 1"
            sub="lorem issum abcd nepifnepw vrnwgnroq fdhbfew fewhgnew"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
