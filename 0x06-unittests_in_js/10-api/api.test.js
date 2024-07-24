const request = require('request');
const { expect } = require('chai');

describe('API Integration Tests', () => {
  const API_URL = 'http://localhost:7865';

  describe('GET /', () => {
    it('should return StatusCode 200 and the message "Welcome to the payment system"', (done) => {
      request.get(`${API_URL}/`, (err, res, body) => {
        if (err) return done(err);
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('GET /cart/:id', () => {
    it('should return StatusCode 200 and the message "Payment methods for cart 47" for valid :id', (done) => {
      request.get(`${API_URL}/cart/47`, (err, res, body) => {
        if (err) return done(err);
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 47');
        done();
      });
    });

    it('should return StatusCode 404 for negative number values in :id', (done) => {
      request.get(`${API_URL}/cart/-47`, (err, res, body) => {
        if (err) return done(err);
        expect(res.statusCode).to.equal(404);
        done();
      });
    });

    it('should return StatusCode 404 for non-numeric values in :id', (done) => {
      request.get(`${API_URL}/cart/d200-44a5-9de6`, (err, res, body) => {
        if (err) return done(err);
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('should return StatusCode 200 and the welcome message "Welcome Pinkbrook" when userName is provided', (done) => {
      request.post(`${API_URL}/login`, { json: { userName: 'Pinkbrook' } }, (err, res, body) => {
        if (err) return done(err);
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Pinkbrook');
        done();
      });
    });

  });

  describe('GET /available_payments', () => {
    it('should return StatusCode 200 and the payment methods object', (done) => {
      request.get(`${API_URL}/available_payments`, (err, res, body) => {
        if (err) return done(err);
        expect(res.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      });
    });
  });
});
