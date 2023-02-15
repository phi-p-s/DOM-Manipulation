const url = "https://pokeapi.co/api/v2/pokemon"
document.getElementById("pnameForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const pokemon = event.target[0].value;
    let response = fetch('${url}/${pokemon}')
        .then((data) => data.json())
        .then((json) => {
            let parent = document.getElementById("pokemon");
            let image = document.createElement("img");
            image.src = json.sprites.front_default;
            parent.appendChild(image);
        })
});