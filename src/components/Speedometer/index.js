// Write your code here

import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  increaseSpeed = () => {
    const {speed} = this.state
    if (speed >= 200) {
      this.setState(prevState => ({speed: prevState.speed}))
    } else {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  decreaseSpeed = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1>SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="img-size"
        />
        <h1>Speed is {speed}mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button
            className="acc-btn"
            type="button"
            onClick={this.increaseSpeed}
          >
            Accelerate
          </button>
          <button
            className="brk-btn"
            type="button"
            onClick={this.decreaseSpeed}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
