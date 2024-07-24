const sinon = require('sinon');
const { expect } = require('chai'); // Correct import statement
const sendPaymentRequestToApi = require('./4-payment.js'); // Make sure this path is correct

describe('sendPaymentRequestToApi', function () {
  let spyConsole;

  beforeEach(function () {
    // Create a spy on console.log
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the original console.log
    spyConsole.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);

    expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(spyConsole.calledOnce).to.be.true;
  });

  it('should log "The total is: 20" when called with 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);

    expect(spyConsole.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(spyConsole.calledOnce).to.be.true;
  });
});
