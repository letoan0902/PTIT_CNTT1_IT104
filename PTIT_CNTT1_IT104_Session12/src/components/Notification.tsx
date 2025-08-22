import { Component } from 'react'


export default class Notification extends Component {
    componentDidMount(): void {
        console.log("Component đã được mount");
        
    }
  render() {
    return (
      <div>
        <h2>Notification Component</h2>
        <p>Mở console để xem thông báo</p>
      </div>
    )
  }
}
