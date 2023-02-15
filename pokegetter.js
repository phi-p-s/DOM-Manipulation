const api = "https://pokeapi.co/api/v2/"
var pokeName = document.getElementById("pname");
let addButton = document.querySelector('#button');

if (addButton){
    var fetchName = api.concat(pokeName)
    addButton.addEventListener("click", getPokemon(fetchName));
    console.log(fetchName)
}

function getPokemon(apiLink){
    console.log("HI");
    fetch(apiLink)
    .then((response) => response.json())
    .then((data) => console.log(data));
}