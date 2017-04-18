var React = require('react');
var {Component} = React;
var Clock = require('Clock');
var Controls = require('Controls');
var CountdownForm = require('CountdownForm');

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStatus: 'stopped',
      count: 0
    }

    this.handleStatusChange = this.handleStatusChange.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.state.timerStatus !== prevState.timerStatus) {
      switch(this.state.timerStatus) {
        case 'started':
          this.handleStart();
        break;
        case 'stopped':
          this.setState({
            count: 0,
            timerStatus: 'paused'
          });
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  handleStatusChange(newStatus) {
    this.setState({
      timerStatus: newStatus
    });
  }
  handleStart() {
    this.timer = setInterval(() => {
      this.setState({count: this.state.count += 1})
    }, 1000);
  }
  render() {
    var {timerStatus, count} = this.state;

    return (
      <div>
        <h1 className='page-title'>Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange.bind(this)} />
      </div>
    )
  }
}

module.exports = Timer;
