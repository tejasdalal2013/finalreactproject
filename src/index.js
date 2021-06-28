import React from "react";
import ReactDOM from "react-dom";
// import App from './App'
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

const displaydata = Sdata.map((val, indexval) => {
  return (
    <Card
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
});
ReactDOM.render(
  <>
    <h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>
    {displaydata}
  </>,
  document.getElementById("root")
);
