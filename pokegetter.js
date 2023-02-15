var used_url = "https://pokeapi.co/api/v2/pokemon/"
const form = document.getElementById("pname")
form.addEventListener("submit", fetchPokemon())

function fetchPokemon(event) {
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
};

/*        function handleSubmit(event) {
    used_url = "https://pokeapi.co/api/v2/pokemon/";
    event.preventDefault();
    const data = new FormData(event.target);
    const value = data.get('pname');
    console.log({ value })
    used_url = used_url.concat(value)
        //console.log(used_url)
}
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function fetchPokeData() {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: used_url,
            success: function(response) {
                console.log(used_url)
                resolve(response);
            },
            error: function(err) {
                console.log("Error", err);
            },
        })
        return null;
    })
}
async function setPicture() {
    var APIdata = await fetchPokeData()
    console.log(APIdata.data);
    $("#poke-picture").attr("src", APIdata.sprites);
}

$("#add-button").click(() => {
    fetchPokeData()
        //console.log(used_url)
    setPicture()
    used_url = "https://pokeapi.co/api/v2/pokemon/"
})*/