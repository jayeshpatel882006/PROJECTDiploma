import React from "react";
import "./schema.css";


const Schema = ({ text, imgUrl, Title, Url, btnTxt }) => {
  return (
    <div>
      <div
        className="card"
        style={{ width: "18rem", backgroundColor: "#5C8374" }}
      >
        <img
          src={
            imgUrl
              ? imgUrl
              : "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg"
          }
          className="card-img-top"
          alt="Image Not Available"
        />
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <p className="card-text">{text}</p>
          <a
            href={Url}
            rel="noreferrer"
            target="_blank"
            className="btn "
            style={{ backgroundColor: "#1B4242", color: "white" }}
          >
            {btnTxt || "Go to Link"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Schema;
