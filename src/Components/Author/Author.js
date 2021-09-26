import React from "react";

const Author = (props) => {
  const { name, img } = props.name;

  return (
    <div>
      <h1>Name:{name}</h1>
      <img src={img} alt="" />
    </div>
  );
};

export default Author;
