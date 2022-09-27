import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    color1: "white1",
    color2: "white2",
    color3: "white3",
  };

  stopClick = () => {
    this.setState({ color1: "redlight", color2: "white2", color3: "white3" });
  };

  readyClick = () => {
    this.setState({
      color1: "white1",
      color2: "yellowlight",
      color3: "white3",
    });
  };

  goClick = () => {
    this.setState({ color1: "white1", color2: "white2", color3: "greenlight" });
  };

  render() {
    const { color1, color2, color3 } = this.state;
    return (
      <div className="bg-container">
        <h1 className="heading1">Traffic Light</h1>
        <div>
          <div className="d-flex flex-row justify-content-center">
            <div>
              <div>
                <button
                  type="button"
                  className="button bg-danger"
                  onClick={this.stopClick}
                >
                  Stop
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="button bg-warning"
                  onClick={this.readyClick}
                >
                  Ready
                </button>
              </div>
              <div>
                <button type="button" className="button bg-success" onClick={this.goClick}>
                  Go
                </button>
              </div>
            </div>
            <div>
              <div className="card-container">
                <p id="stopLight" className={color1}></p>
                <p id="readyLight" className={color2}></p>
                <p id="goLight" className={color3}></p>
              </div>
            </div>
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
