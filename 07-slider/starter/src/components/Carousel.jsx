import React, { useEffect, useState } from "react";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { list, longList, shortList } from "../data";
import Person from "./Person";
const Carousel = () => {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;

      console.log(result);
      return result;
    });
  };

  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => {
      clearInterval(sliderId);
    };
  }, []);
  return (
    <section className="slider-container">
      {people.map((person, personIndex) => (
        <Person
          key={person.id}
          {...person}
          personIndex={personIndex}
          currentPerson={currentPerson}
        />
      ))}
      <button type="button" className="prev" onClick={prevSlide}>
        {<FiChevronsLeft />}
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        {<FiChevronsRight />}
      </button>
    </section>
  );
};

export default Carousel;
