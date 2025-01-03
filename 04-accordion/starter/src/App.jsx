import { useState } from "react";
import data from "./data";
import SingleQuestion from "./components/SingleQuestion";
import Questions from "./components/Questions";

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);
  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        setActiveId={setActiveId}
      />
    </main>
  );
};
export default App;
