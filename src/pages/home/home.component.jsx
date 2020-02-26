import React from "react";
import { Carousel } from "antd";

import CarouselItem from "../../components/carousel-item/carousel-item.component";

import carouselFirst from "../../assets/image/carousel-first.jpg";
import carouselSecond from "../../assets/image/carousel-second.jpg";
import carouselThird from "../../assets/image/carousel-third.jpg";


const HomePage = () => {
  return (
    <div className="home">
      <div className="carousel">
        <Carousel autoplay effect="fade">
          <div className="carousel-first">
            <CarouselItem
              bg={carouselFirst}
              title="Slide 1"
              sub="lorem issum abcd nepifnepw vrnwgnroq fdhbfew fewhgnew"
            />
          </div>
          <div>
            <div className="carousel-first">
              <CarouselItem
                bg={carouselSecond}
                title="Slide 1"
                sub="lorem issum abcd nepifnepw vrnwgnroq fdhbfew fewhgnew"
              />
            </div>
          </div>
          <div>
            <div className="carousel-first">
              <CarouselItem
                bg={carouselThird}
                title="Slide 1"
                sub="lorem issum abcd nepifnepw vrnwgnroq fdhbfew fewhgnew"
              />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;
