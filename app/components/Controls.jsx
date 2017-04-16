var React = require('react');
var {Component} = React;
var PropTypes = require('prop-types');

class Controls extends Component {
  onStatusChange(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  }
  render() {
    var {countdownStatus} = this.props;
    var renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className='button secondary' onClick={this.onStatusChange('paused').bind(this)}>Pause</button>
      } else if (countdownStatus === 'paused') {
        return <button className='button primary' onClick={this.onStatusChange('started').bind(this)}>Start</button>
      }
    };

    return (
      <div className='controls'>
        {renderStartStopButton()}
        <button className='button alert hollow' onClick={this.onStatusChange('stopped').bind(this)}>Clear</button>
      </div>
    )
  }
}

Controls.propTypes = {
  countdownStatus: PropTypes.string.isRequired,
  onStatusChange: PropTypes.func.isRequired
};

module.exports = Controls;
