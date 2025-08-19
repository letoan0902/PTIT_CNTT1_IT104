import React, { Component } from "react";

export default class ColorBox extends Component {
  render() {
    const colors = ["red", "blue", "green"];

    return (
      <div style={{ display: "flex", gap: "10px" }}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: color,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {color}
          </div>
        ))}
      </div>
    );
  }
}
