import React from "react";
import "./Card.css";
const Card = (props) => {
 

  const { name, img, book, age, country, published, salary } = props.author;
  return (
    <div className="card">
      <img src={img} alt="" />
      <h2>Name:{name}</h2>
      <h4>Age:{age}</h4>
      <h3>Country:{country}</h3>
      <h3>Salary:{salary}</h3>
      <h5>Book:{book}</h5>
      <h5>Published:{published}</h5>

      <button className="btn" onClick={() => props.clickhandler(props.author)}>
        <i className="fas fa-cart-plus"></i>add-to-cart
      </button>
    </div>
  );
};

export default Card;
