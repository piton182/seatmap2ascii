import {expect} from 'chai'
import supertest from 'supertest-as-promised'

const req = supertest.agent("http://localhost:3000/")

describe('/', () => {
  it('is alive!', () => {
    return req.get('/').expect(200)
  })
})

describe('reservation', () => {
  it('can be created', () => {
    // BEFORE
    // create an aircraft seatmap
    // POST /aircraft/123/seatmap

    // POST /reservation { 1A }

    // AFTER
    // destroy an aircraft seatmap
  })
  it('changes seatplan', () => {

  })
})
