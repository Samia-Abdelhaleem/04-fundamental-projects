import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";
const App = () => {
  const [counter, setCounter] = useState(1);
  const [paragraphs, setParagraphs] = useState([data[0]]);

  const onCounterChange = (e) => {
    setCounter(e.target.value);
    setParagraphs(data.slice(0, counter));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setParagraphs(data.slice(0, +counter));
    // const formData = new FormData(e.currentTarget);
    // const newFormData = Object.fromEntries(formData);

    // setParagraphs(data.slice(0, +newFormData.counter));
  };
  return (
    <section className="section-center">
      <h4>tired of blogging lorem ipsum </h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="counter" className="form-label">
          paragraphs :{" "}
        </label>
        <input
          type="number"
          name="counter"
          id="counter"
          className="form-input"
          value={counter}
          onChange={(e) => setCounter(e.target.value)}
          min="1"
        />
        <button
          type="submit"
          className="btn"
          onClick={() => setParagraphs(data.slice(0, counter))}
        >
          {" "}
          generate
        </button>
      </form>

      <article className="lorem-text">
        {paragraphs.map((paragraph) => (
          <p key={nanoid()}>{paragraph} </p>
        ))}
      </article>
    </section>
  );
};
export default App;
