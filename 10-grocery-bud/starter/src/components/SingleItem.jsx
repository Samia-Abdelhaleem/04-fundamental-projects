import React from "react";
import { setLocalStorage } from "../App";
import { ToastContainer, toast } from "react-toastify";
const SingleItem = ({ id, name, isCompleted, setItems }) => {
  const removeItem = (id) => {
    setItems((oldItems) => {
      const newItems = oldItems.filter((item) => item.id !== id);
      setLocalStorage(newItems);
      toast.success("Item removed from the list");
      return newItems;
    });
  };

  const toggleCompleted = (id) => {
    setItems((oldItems) => {
      const newItems = oldItems.map((item) => {
        if (item.id === id) return { ...item, isCompleted: !item.isCompleted };
        return item;
      });

      setLocalStorage(newItems);
      return newItems;
    });
  };

  return (
    <div className="single-item">
      <input
        type="checkbox"
        name="completed"
        id="completed"
        checked={isCompleted}
        onChange={() => {
          toggleCompleted(id);
        }}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: isCompleted && "line-through",
        }}
      >
        {name}
      </p>
      <button
        className="btn remove-btn"
        onClick={() => {
          removeItem(id);
        }}
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;
