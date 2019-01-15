const request = require('supertest');
const app = require('../server/app');
const knex = require('../server/config/knex_config');

afterAll(() => {
  knex.destroy();
});

describe('GET /notes', () => {
  test('It should respond with a 200', (done) => {
    request(app)
      .get('/notes')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe('POST /notes', () => {
  test('It should respond with a 200', (done) => {
    request(app)
      .post('/notes')
      .send({
        note: 'newnote',
      })
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});