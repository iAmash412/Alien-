const request = require('supertest');
const app = require('../app');


describe('API Server', () => {
    let api;

    beforeAll(() => {
        api = app.listen(5000, () => {
            console.log('Test server running at port 5000!' );
        });
    });
    afterAll((done) => {
        console.log('Gracefully stopping test server');
        api.close(done);
    });
    it('responds to get / with a status 200', (done) => {
        request(api).get('/').expect(200, done);
    });//creating a new end point/new route
    it('responds to get /cats with a status 200', (done) => {
        request(api).get('/cats').expect(200,done);
    });//we are testing to see if the route is working, so we need to make sure the data we are requesting is currently in our database
    it('retrieves a Movie by id', (done) => {
        request(api)
            .get('/alienMovies')
            .expect(200)
            .expect({id:3, title:'Man of Steel' , year:2013, director: "Zack Snyder" , ageRating:"12a" , movieRating: "7.1/10"}, done);
    });
});






