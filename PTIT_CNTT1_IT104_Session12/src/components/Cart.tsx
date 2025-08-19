import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
    return (
      <div style={{
        width: "calc(25% - 8px)",
        height: "calc(25% - 8px)",
        background: "#fef2f2",
        color: "black",
        marginLeft: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>Cart</div>
    )
  }
}
