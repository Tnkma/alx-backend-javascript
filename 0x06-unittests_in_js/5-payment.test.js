const sinon = require('sinon');
const chai = require('chai');
const { sendPaymentRequestToApi } = require('./4-payment.js');

const { expect } = chai;

describe('sendPaymentRequestToApi', function () {
  let spy;

  beforeEach(function () {
    // Spy on console.log to verify the output
    spy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the spy
    spy.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" when called with 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
