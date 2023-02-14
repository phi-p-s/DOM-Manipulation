const api = "https://pokeapi.co/api/v2/"
var pokeName = document.getElementById("pname");
var fetchName = api.concat(pokeName)
let addButton = document.querySelector('#button');
addButton.addEventListener("click", ()=>{
    msg.classList.toggle('reveal');
});

function getPokemon(apiLink){
    console.log("HI");
    fetch(apiLink)
    .then((response) => response.json())
    .then((data) => console.log(data));
}