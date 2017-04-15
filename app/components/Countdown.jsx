var React = require('react');
var {Component} = React;
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countdownStatus: 'stopped'
    }
    this.handleSetCountdown = this.handleSetCountdown.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  }
  startTimer() {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  }
  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  }
  render() {
    var {count} = this.state;

    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    )
  }
}

module.exports = Countdown;
