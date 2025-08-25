import "./App.css";
import { Component } from "react";


interface ClockState {
  time: Date;
}

class Clock extends Component<object, ClockState> {
  private timerID?: number;

  constructor(props: object) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = window.setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    return (
      <div className="clock-container">
        <h2>Thời gian hiện tại:</h2>
        <p className="clock-time">{this.state.time.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Clock;