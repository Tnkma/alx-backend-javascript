const request = require('request');
const { expect } = require('chai');

describe('Integration Testing', () => {
  describe('GET /', () => {
    it('should return StatusCode: 200 and body: Welcome to the payment system', (done) => {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        if (error) return done(error);
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('GET /cart/:id', () => {
    it('should respond with StatusCode: 200 and message including id when :id is a number (e.g., 12)', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/12',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        if (error) return done(error);
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('should respond with StatusCode: 200 and message including id when :id is a number (e.g., 1)', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/1',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        if (error) return done(error);
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 1');
        done();
      });
    });

    it('should respond with StatusCode: 200 and message including id when :id is a number (e.g., 123)', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/123',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        if (error) return done(error);
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 123');
        done();
      });
    });

    it('should respond with StatusCode: 404 and HTML error page when :id contains non-numeric characters (e.g., a12)', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/a12',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        if (error) return done(error);
        expect(response.statusCode).to.equal(404);
        expect(body).to.include('<!DOCTYPE html>');
        expect(body).to.include('<pre>Cannot GET /cart/a12</pre>');
        done();
      });
    });

    it('should respond with StatusCode: 404 and HTML error page when :id contains non-numeric characters (e.g., a12b)', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/a12b',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        if (error) return done(error);
        expect(response.statusCode).to.equal(404);
        expect(body).to.include('<!DOCTYPE html>');
        expect(body).to.include('<pre>Cannot GET /cart/a12b</pre>');
        done();
      });
    });

    it('should respond with StatusCode: 404 and HTML error page when :id contains non-numeric characters (e.g., 12b)', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/12b',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        if (error) return done(error);
        expect(response.statusCode).to.equal(404);
        expect(body).to.include('<!DOCTYPE html>');
        expect(body).to.include('<pre>Cannot GET /cart/12b</pre>');
        done();
      });
    });

    it('should respond with StatusCode: 404 and HTML error page when :id is a non-numeric string (e.g., hello)', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/hello',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        if (error) return done(error);
        expect(response.statusCode).to.equal(404);
        expect(body).to.include('<!DOCTYPE html>');
        expect(body).to.include('<pre>Cannot GET /cart/hello</pre>');
        done();
      });
    });

    it('should respond with StatusCode: 404 and HTML error page when :id is missing (empty string)', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        if (error) return done(error);
        expect(response.statusCode).to.equal(404);
        expect(body).to.include('<!DOCTYPE html>');
        expect(body).to.include('<pre>Cannot GET /cart/</pre>');
        done();
      });
    });
  });
});
