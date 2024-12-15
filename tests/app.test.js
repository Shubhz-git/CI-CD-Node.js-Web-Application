const request = require('supertest');
const app = require('../src/index');

describe('GET /', () => {
  it('should return the home page with correct content', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('CI/CD Pipeline');
    expect(res.text).toContain('Welcome to the CI/CD Demo Application!');
  });
});
