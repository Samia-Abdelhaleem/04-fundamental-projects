import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const App = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const slide = (action) => {
    if (action === "prev") {
      //index - 1 + people.length to convert to positive number
      setIndex((index) => (index - 1 + people.length) % people.length);
    } else {
      setIndex((index) => (index + 1) % people.length);
    }
  };

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) randomIndex = index + 1;
    setIndex(randomIndex % people.length);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <div>
          <h4 className="author">{name}</h4>
          <p className="job"> {job}</p>
          <p className="info">{text}</p>

          <div className="btn-container">
            <button className="prev-btn" onClick={() => slide("prev")}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={() => slide("next")}>
              <FaChevronRight />
            </button>
          </div>
        </div>
        <button className="btn btn-random" onClick={randomPerson}>
          Surprise Me
        </button>
      </article>
    </main>
  );
};
export default App;
