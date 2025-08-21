import React, { Component } from 'react'

export default class Calculation extends Component {
  render() {
    const sum = (a:number,b:number)=>{
        return a+b;
    }

    const sub = (a:number,b:number)=> a-b;
    const mul = (a:number,b:number)=>a*b;
    const div = (a:number,b:number)=>a/b;


    return <>
      <h3>Danh sách kết quả</h3>
      <ul>
        <li>10 + 10 = {sum(10,10)}</li>
        <li>10 - 10 = {sub(10,10)}</li>
        <li>10 * 10 = {mul(10,10)}</li>
        <li>10 / 10 = {div(10,10)}</li>
      </ul>
    </>
  }
}
