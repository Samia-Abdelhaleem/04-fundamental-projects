import React from "react";
import { ToastContainer, toast } from "react-toastify";
const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;

  const saveToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`#${hex}`);
      toast.success("color copied to clipboard");
      try {
      } catch (error) {
        toast.error("failed to copy color to clipboard");
      }
    } else {
      toast.error("Clipboard access not available ");
    }
  };

  return (
    <article
      style={{ backgroundColor: `#${hex}` }}
      className={index > 10 ? "color color-light" : "color"}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{weight} %</p>
      <p className="color-value"> {hex}</p>
    </article>
  );
};

export default SingleColor;
