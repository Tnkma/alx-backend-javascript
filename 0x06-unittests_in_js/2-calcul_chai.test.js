const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');
const expect = chai.expect;

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return 5 when inputs are 1 and 4', function () {
      expect(calculateNumber('SUM', 1, 4)).to.equal(5);
    });

    it('should return 6 when inputs are 2.4 and 4', function () {
      expect(calculateNumber('SUM', 2.4, 4)).to.equal(6);
    });

    it('should return 6 when inputs are 4 and 2.4', function () {
      expect(calculateNumber('SUM', 4, 2.4)).to.equal(6);
    });

    it('should return 6 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 0 when inputs are -2 and 2', function () {
      expect(calculateNumber('SUM', -2, 2)).to.equal(0);
    });

    it('should return -3 when inputs are -1.6 and -1.4', function () {
      expect(calculateNumber('SUM', -1.6, -1.4)).to.equal(-3);
    });

    it('should return 0 when both inputs are 0', function () {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
  });

  describe('SUBTRACT', function () {
    it('should return 2 when inputs are 5 and 3', function () {
      expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
    });

    it('should return -3 when inputs are 2 and 4.5', function () {
      expect(calculateNumber('SUBTRACT', 2, 4.5)).to.equal(-3);
    });

    it('should return 3 when inputs are 4.5 and 2', function () {
      expect(calculateNumber('SUBTRACT', 4.5, 2)).to.equal(3);
    });

    it('should return -4 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 0 when inputs are 2.5 and 2.5', function () {
      expect(calculateNumber('SUBTRACT', 2.5, 2.5)).to.equal(0);
    });

    it('should return -5 when inputs are -2 and 3', function () {
      expect(calculateNumber('SUBTRACT', -2, 3)).to.equal(-5);
    });

    it('should return 0 when both inputs are 0', function () {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });
  });

  describe('DIVIDE', function () {
    it('should return 2 when inputs are 8 and 4', function () {
      expect(calculateNumber('DIVIDE', 8, 4)).to.equal(2);
    });

    it('should return 5 when inputs are 9.5 and 2', function () {
      expect(calculateNumber('DIVIDE', 9.5, 2)).to.equal(5);
    });

    it('should return 0.2 when inputs are 2 and 9.5', function () {
      expect(calculateNumber('DIVIDE', 2, 9.5)).to.equal(0.2);
    });

    it('should return 0.2 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return Error when divisor is 0', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return 1 when both inputs are 2', function () {
      expect(calculateNumber('DIVIDE', 2, 2)).to.equal(1);
    });

    it('should return -2 when inputs are -4 and 2', function () {
      expect(calculateNumber('DIVIDE', -4, 2)).to.equal(-2);
    });
  });
});
