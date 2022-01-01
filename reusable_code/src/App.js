import logo from "./logo.svg";
import "./App.css";
import React from "react";
class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }
  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }
  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}
function Cat(props) {
  return (
    <p>
      x:{props.mouse.x}, y:{props.mouse.y}
    </p>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Mouse
          render={(stateOfMouse) => {
            console.log(stateOfMouse);
            return <Cat mouse={stateOfMouse} />;
          }}
        />
      </div>
    );
  }
}

export default App;
