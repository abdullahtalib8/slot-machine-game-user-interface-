import React from "react";
import Images from "./Images";
import Heading from "./Heading";
import "./index.css";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          {/* <img src={props.imgsrc} alt="myPic" className="card_img" />; */}
          <Images imgsrc={props.imgsrc} />
          <div className="card__info">
            <span className="card__category">{props.title}</span>
            <Heading sname={props.sname} />
            {/* <h3 className="card__title">{props.sname}</h3> */}
            <a href={props.link}>
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
