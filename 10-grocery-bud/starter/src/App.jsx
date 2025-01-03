import { useState } from "react";
import Form from "./components/Form";
import Items from "./components/Items";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
export const setLocalStorage = (items) => {
  localStorage.setItem("items", JSON.stringify(items));
};
const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (storedItems) setItems(storedItems);
  }, []);

  return (
    <section className="section-center">
      <Form setItems={setItems} />
      <Items items={items} setItems={setItems} />
      <ToastContainer position="bottom-center" />
    </section>
  );
};

export default App;
