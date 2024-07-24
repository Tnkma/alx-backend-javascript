import chai from 'chai';
const { expect } = chai;
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', function() {
  describe('type SUM', function() {
    it('should return 6', function() {
      expect(calculateNumber('SUM', 2.4, 4.3)).to.equal(6);
    });
  });

  describe('type SUBTRACT', function() {
    it('should return -4', function() {
      expect(calculateNumber('SUBTRACT', 1.3, 4.5)).to.equal(-4);
    });
  });

  describe('type DIVIDE', function() {
    it('should return 0.2', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it('should return Error', function() {
      expect(calculateNumber('DIVIDE', 9.4, 0)).to.equal('Error');
    });
  });
});
