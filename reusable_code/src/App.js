import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 1,
      y: 1,
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }
  handleMouseMove(e) {
    this.setState({ x: e.clientX, y: e.clientY });
  }
  render() {
    return (
      <div onMouseMove={this.handleMouseMove} style={{ height: "100vh" }}>
        <p>
          the cordination of mouse pointer. x:{this.state.x}, y:{this.state.y}
        </p>
      </div>
    );
  }
}

export default App;
