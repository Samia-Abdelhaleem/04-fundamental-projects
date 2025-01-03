import React from "react";
import { nanoid } from "nanoid";
import { setLocalStorage } from "../App";
import { ToastContainer, toast } from "react-toastify";
const Form = ({ setItems }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.currentTarget));
    if (!form.item) {
      toast.error("please provide a value");
      return;
    }

    setItems((oldItems) => {
      const newItems = [
        ...oldItems,
        { id: nanoid(), name: form.item, isCompleted: false },
      ];
      setLocalStorage(newItems);

      return newItems;
    });
    toast.success("item added to the List");
    e.currentTarget.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Grocery Bud </h4>
        <div className="form-control">
          <input type="text" name="item" id="item" className="form-input" />
          <button type="submit" className="btn">
            add item
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
