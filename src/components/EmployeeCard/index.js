import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} ></img>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Position:</strong> {props.position}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;


