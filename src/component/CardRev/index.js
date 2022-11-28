// index.js
import React from "react";
import "./index.css";
export default function index({ data, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      {data ? (
        <>
          <figure>
            <img src={data.id} alt={data.l} />
          </figure>
          <div className="card-info">
            <h3>{data.id}</h3>
            <p>{data.chartRating}</p>
           
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
