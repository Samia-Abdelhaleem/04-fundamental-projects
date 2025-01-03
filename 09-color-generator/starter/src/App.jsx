import { useState } from "react";
import ColorList from "./components/ColorList";
import Form from "./components/Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
const App = () => {
  const [colorsList, setColorsList] = useState(new Values("#f15025").getAll());

  const generateColors = (color) => {
    try {
      const allColors = new Values(color).getAll();
      setColorsList(allColors);
    } catch (error) {
      console.log("🚀 ~ generateColors ~ error:", error);

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