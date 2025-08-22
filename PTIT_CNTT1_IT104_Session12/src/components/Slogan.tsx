import { Component } from 'react'

type SloganProps = Record<string,never>;
type SloganState = {
    slogan: string;
}

export default class Slogan extends Component<SloganProps,SloganState> {
    constructor(props:SloganProps){
        super(props);
        this.state={
            slogan: "Học code để đi làm"
        }
    }

    shouldComponentUpdate(): boolean {
        return false;
    }

    handleChange=()=>{
        this.setState({
            slogan: "Học code sẽ thành công. Cố lên"
        });
        console.log("State mới: ",this.state.slogan);
    }
  render() {
    return (
      <div>
        <h1>Slogan: {this.state.slogan}</h1>
        <button onClick={this.handleChange}>Change state</button>
      </div>
    )
  }
}
