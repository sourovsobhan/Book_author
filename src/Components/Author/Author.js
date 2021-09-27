import React from "react";
import "./Author.css";
const Author = (props) => {
  const { name, img, published } = props.name;

  return (
    <div className="author">
      <img src={img} alt="" />
      <h1>Name:{name}</h1>

      <h2>Published:{published}</h2>
    </div>
  );
};

export default Author;
