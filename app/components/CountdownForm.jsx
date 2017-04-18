var React = require('react');
var {Component} = React;

class CountdownForm extends Component {
  onSubmit(e) {
    e.preventDefault();
    var strSeconds = e.target.seconds.value;
  
    if (strSeconds && strSeconds.match(/^[0-9]*$/)) {
      e.target.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  }
  render() {
    return (
      <div>
        <form name='form' onSubmit={this.onSubmit.bind(this)} className='countdown-form'>
          <input type='text' name='seconds' ref='seconds' placeholder='Enter time in seconds'/>
          <button className='button expanded'>Start</button>
        </form>
      </div>
    )
  }
}

module.exports = CountdownForm;
