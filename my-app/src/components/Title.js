import React from "react";

const Title = ({ name, contactNumber, collegeName, rollNum }) => {
  return (
    <>
      <div>
        <div>
          <h1 style={{ fontSize: 50, color: "red", backgroundColor: "blue" }}>
            {name}
          </h1>
        </div>
      </div>
      <h1>This is about Title</h1>
      <h1 style={{ color: "red", fontStyle: "italic" }}>{contactNumber}</h1>
      <h1 style={{ color: "red", fontStyle: "italic" }}>{collegeName} </h1>
      <h1 style={{ color: "red", fontStyle: "italic" }}>{rollNum} </h1>
    </>
  );
};

export default Title;
