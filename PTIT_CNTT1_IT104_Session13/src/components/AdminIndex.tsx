import React, { Component } from 'react'
import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import Footer from './Footer';

export default class AdminIndex extends Component {
  render() {
    return (
      <>
        <Header/>
        <div style={{
            display: "flex",
            height: "calc(100vh - 40px)"
        }}>
            <Menu/>
            <div
            style={{margin: "20px", display: 'flex', flex: 1, flexDirection: "column"}}>
                <Main/>
                <Footer/>
            </div>
        </div>
      </>
    )
  }
}
