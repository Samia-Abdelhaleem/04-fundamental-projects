import { useEffect } from "react";
import { useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();

      setTours(tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    fetchTours();
  }, []);
  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : tours.length ? (
        <Tours tours={tours} removeTour={removeTour} />
      ) : (
        <div className="title">
          <h2> no tours left</h2>
          <button
            className="btn"
            style={{ marginTop: "2rem" }}
            onClick={fetchTours}
          >
            refresh
          </button>
        </div>
      )}
    </main>
  );
};
export default App;
