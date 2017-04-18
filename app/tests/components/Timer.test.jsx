var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
// var TestUtils = require('react-dom/test-utils');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  it('should start timer on started status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.handleStatusChange('started');
    expect(timer.state.count).toBe(0);

    setTimeout(() => {
      expect(timer.state.count).toBe(234);
      expect(timer.state.timerStatus).toBe('started');
      done();
    }, 1001);
  });
});
