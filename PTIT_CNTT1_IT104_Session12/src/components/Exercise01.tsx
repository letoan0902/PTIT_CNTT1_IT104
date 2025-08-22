import { Component } from 'react'

type Exercise01Props = Record<string, never>;
type Exercise01State ={
  userName: string;
}

export default class Exercise01 extends Component<Exercise01Props,Exercise01State> {
    constructor(props:Exercise01Props){
        super(props);
        this.state={
            userName: "Lê Phú Toàn"
        }
    }

  render() {
    return (
      <div>
        <h1>Xin chào</h1>
        <h2>Tên của tôi là: {this.state.userName}</h2>
      </div>
    )
  }
}
