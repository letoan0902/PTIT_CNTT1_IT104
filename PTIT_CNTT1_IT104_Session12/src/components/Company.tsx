import { Component } from 'react'

type CompanyProps = Record<string,never>
type CompanyState = {
    company: string;
};


export default class Company extends Component<CompanyProps,CompanyState> {
  constructor(props:CompanyProps){
    super(props);
    this.state={
        company:"Rikkei Academy"
    };
  }
    handleChange=()=>{
        this.setState({
            company: "Rikkei Soft",
        });
    };
  
    render() {
    return (
      <div>
        <h1>Company: {this.state.company}</h1>
        <button onClick={this.handleChange}>Change state</button>
      </div>
    )
  }
}
