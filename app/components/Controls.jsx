var React = require('react');
var {Component} = React;
var PropTypes = require('prop-types');

class Controls extends Component {
  render() {
    var {countdownStatus} = this.props;
    var renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className='button secondary'>Pause</button>
      } else if (countdownStatus === 'paused') {
        return <button className='button primary'>Start</button>
      }
    };

    return (
      <div className='controls'>
        {renderStartStopButton()}
        <button className='button alert hollow'>Clear</button>
      </div>
    )
  }
}

Controls.propTypes = {
  countdownStatus: PropTypes.string.isRequired
};

module.exports = Controls;
