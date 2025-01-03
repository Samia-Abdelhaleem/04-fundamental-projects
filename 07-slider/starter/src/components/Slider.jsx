import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState } from "react";
import Slider from "react-slick";
import Person from "./Person";
import { list, longList, shortList } from "../data";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 200,
  autoplaySpeed: 4000,
  cssEase: "linear",
};
export default function SliderComponent() {
  const [people, setPeople] = useState(list);

  return (
    <section className="slick-container">
      <Slider {...settings}>
        {people.map((person, personIndex) => (
          <Person key={person.id} {...person} />
        ))}
      </Slider>
    </section>
  );
}
