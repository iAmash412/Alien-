// Setup 
const catsList = document.querySelector("ul");

//Bind event listeners

// **************************************

//Cats flow - appends cat by index
async function getAlienMovies(endpoint) {
    let url = 'http://localhost:5001';
    let apiUrl = url + endpoint;
    const response = await fetch(apiUrl);
    const data = await response.json();
        //.catch(console.warn)
    const {title, year, director, ageRating, movieRating} = data
    document.getElementById("x").textContent = title;
    document.getElementById("x2").textContent = year;
    document.getElementById("x3").textContent = director;
    document.getElementById("x4").textContent = ageRating;
    document.getElementById("x5").textContent = movieRating;

}


//Message flow - sends secret message
async function getMessage() {
    let url = 'http://localhost:5001/';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
        //.catch(console.warn)
    document.getElementById("message").textContent = data[0].text;
    console.log(data);        
}
//getMessage()
function renderMessage(data) {
    
    //onsole.log(data);
    msg.textContent = data;
    msg.style.color = 'pink';
    document.body.append(msg)
}
