import React from 'react';
const date = new Date();
const dateName = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();


// ======================
//   22 Dec 2023
// ======================

// Your component code here

const Card = (props) => {
  const {titleText, descText} = props;
  return (
    <div className="card">
      {/* <h4 className="cardTitle">{props.titleText}</h4> */}
      <h4 className="cardTitle">{titleText}</h4>
      {/* <p className="cardDescription">{props.descText}</p> */}
      <p className="cardDescription">{descText}</p>
      <p className="cardDate">{dateName + "/" + currentMonth + "/" + currentYear}</p>
    </div>
  );
};

export default Card;

