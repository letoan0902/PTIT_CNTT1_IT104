import React, { Component } from 'react'
import Header from './Header';
import Menu from './Menu';
import Navigation from './Navigation';
import Article from './Article';
import Cart from './Cart';

export default class UserLayout extends Component {
    cards:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

  render() {
    return (
      <>
        <Header/>
        <Navigation/>
        <div style={{
            display: "flex",
            height: "calc(100vh - 70px)"
        }}>
            <Menu/>
            <div
            style={{marginRight: "8px", display: 'flex', flex: 1, flexWrap: "wrap"}}>
                {this.cards.map(num=>{
                    return <Cart key={num}/>
                })}
            </div>
            <Article/>
        </div>
      </>
    )
  }
}
