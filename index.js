const app = require ('./app');
const port = 5001;

app.listen(port,() => {
    console.log (`express example app depart from at http://localhost:${port}`);
});
