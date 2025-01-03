import { useState } from "react";
import ColorList from "./components/ColorList";
import Form from "./components/Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
const App = () => {
  const [colorsList, setColorsList] = useState(new Values("#f15025").all(10));

  const generateColors = (color) => {
    try {
      const allColors = new Values(color).all();
      setColorsList(allColors);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form generateColors={generateColors} />
      <ColorList colors={colorsList} />
      <ToastContainer position="bottom-center" />
    </main>
  );
};
export default App;
