// 4-payment.test.js
const sinon = require('sinon');
const chai = require('chai');
const { Utils } = require('./utils.js');
const { sendPaymentRequestToApi } = require('./4-payment.js');

const { expect } = chai;

describe('sendPaymentRequestToApi', function () {
  let stub;
  let spy;

  beforeEach(function () {
    // Stub the Utils.calculateNumber method to always return 10
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    // Spy on console.log to verify the output
    spy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the stub and the spy
    stub.restore();
    spy.restore();
  });

  it('should call Utils.calculateNumber with type SUM and correct arguments', function () {
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct message to the console', function () {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
