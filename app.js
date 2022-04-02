const express = require ('express');
const app = express();
const cors = require('cors')

const port = 5001;


const alienMovies = [
    {id:1, title:'Alien' , year: 1979, director: "Ridley Scott", ageRating:18 , movieRating: "8.5/10"},
    {id:2, title:'Prometheus' , year:2012, director: "David Fincher" , ageRating:15 , movieRating: "7/10"},
    {id:3, title:'Man of Steel' , year:2013, director: "Zack Snyder" , ageRating:"12a" , movieRating: "7.1/10"},
    {id:4, title:'DRAGON BALL SUPER: BROLY ' , year:2018, director: "Tatsuya Nagamine" , ageRating:12 , movieRating: "7.8/10"},
    {id:5, title:'The Suicide Squad' , year:2021, director: "James Gun" , ageRating:15 , movieRating: "7.2/10"},
    {id:6, title:'Alien Vs Predator Requriem ' , year:2007, director: "Strause Bros" , ageRating:15 , movieRating: "4.6/10"},
    {id:7, title:'Lilo & Stitch 2: Stitch Has a Glitch' , year:2005, director: "Tony Leondis" , ageRating:15 , movieRating: "6.2/10"},
]
JSON.stringify(alienMovies);

const message = [{text: "Welcome to Planet Exodus"}];
JSON.stringify(message);

app.use(cors());

app.get('/', (req,res)=>{
    res.send(message);
});

app.get('/alienMovies', (req,res)=>{
    res.send(alienMovies);
});
app.get('/alienMovies/:id', (req,res)=>{
    console.log(res.query);

        const movieAlienId= req.params.id-1;
        const selectedAlien = alienMovies[movieAlienId]
        res.send(selectedAlien)
});

module.exports = app;
