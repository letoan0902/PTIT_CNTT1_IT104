import { Component } from "react";

interface CounterState {
  count: number;
}

class Counter extends Component<object, CounterState> {
  private timer?: number;

  constructor(props: object) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count === 10 ? 0 : prevState.count + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
      </div>
    );
  }
}

export default Counter;