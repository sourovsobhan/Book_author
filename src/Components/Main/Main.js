import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Main.css";
import Author from "./../Author/Author";
const Main = () => {
  // store data
  const [authors, setAuthors] = useState([]);
  // capture data from json
  const [capturedata, setCapturedata] = useState([]);
  const handleClick = (author) => {
    const newAuthor = [...capturedata, author];
    setCapturedata(newAuthor);
   
  };

  useEffect(() => {
    fetch("./author-data.JSON")
      .then((res) => res.json())
      .then((data) => setAuthors(data));
  }, []);
// added salary count in ui
const salaryCount = capturedata.reduce((prve,current)=>prve + current.salary,0);

  return (
    <div>
      <div className="Card-container">
        <div className="single-card">
          {authors.map((author) => (
            <Card author={author} key={author.id} clickhandler={handleClick} />
          ))}
        </div>

        <div>
          <h1>Total Added:{capturedata.length}</h1>
          <h1>Salary: ${salaryCount}</h1>
          {capturedata.map((author) => (
            <Author name={author} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
