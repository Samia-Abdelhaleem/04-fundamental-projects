import React from "react";

const User = ({ id, name, age, image }) => {
  return (
    <div className="person">
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default User;
