const URL = "https://pokeapi.co/api/v2/pokemon/"
document.getElementById("pokemonForm").addEventListener("submit", fetchPokemon);
var form = document.getElementById("updateForm");
if(form){
    form.addEventListener("submit", updateCard);
}
function updateCard(event){
    event.preventDefault();
}
function fetchPokemon(event){
    event.preventDefault();
    let pname = event.target[0].value;
    let used_url = URL.concat(pname)
    console.log(used_url)
    let response = fetch(used_url)
    .then((data => data.json()))
    .then((json) => {
        console.log(json)
        let parent = document.getElementById("pokecards");
        let card = document.createElement("div");
        card.className = "card";
        card.id = pname.concat("card");

        let name = document.createElement("h1");
        name.className = "card-header";
        name.innerText = capitalize(pname);
        card.appendChild(name);
        
        let image = document.createElement("img");
        image.className = "card-image";
        image.src = json.sprites.front_default;
        image.alt = pname;
        image.width = "125";
        image.height = "125";
        card.appendChild(image);

        let hp_stat = document.createElement("p");
        let atk_stat = document.createElement("p");
        let def_stat = document.createElement("p");
        let spatk_stat = document.createElement("p");
        let spdef_stat = document.createElement("p");
        let spd_stat = document.createElement("p");

        let hp = json.stats[0].base_stat;
        let atk = json.stats[1].base_stat;
        let def = json.stats[2].base_stat;
        let spatk = json.stats[3].base_stat;
        let spdef = json.stats[4].base_stat;
        let spd = json.stats[5].base_stat;

        hp_stat.innerText = "Hp: ".concat(hp);
        atk_stat.innerText = "Atk: ".concat(atk);
        def_stat.innerText = "Def: ".concat(def);
        spatk_stat.innerText = "Spatk: ".concat(spatk);
        spdef_stat.innerText = "Spdef: ".concat(spdef);
        spd_stat.innerText = "Spd: ".concat(spd);
        card.appendChild(hp_stat);
        card.appendChild(atk_stat);
        card.appendChild(def_stat);
        card.appendChild(spatk_stat);
        card.appendChild(spdef_stat);
        card.appendChild(spd_stat);
        
        
        let updateForm = document.createElement("form");
        updateForm.className = "updateForm";
        let updateName = document.createElement("input");
        updateName.id = pname.concat("form")
        updateName.setAttribute("type", "text");
        updateName.setAttribute("name", "newname");
        updateName.setAttribute("value", pname);
        let s = document.createElement("button");
        let button_text = document.createTextNode("Update");
        s.appendChild(button_text);
        s.setAttribute("type", "button");
        //s.setAttribute("onclick", 'updateCard();');
        s.onclick = function() {
            let newname = document.getElementById(pname.concat("form")).value;
            console.log(newname);
            updateCard(card.id, newname);
        }
        updateForm.appendChild(updateName);
        updateForm.appendChild(s);
        card.appendChild(updateForm);
        parent.appendChild(card);
    })
    .catch(error => console.error(error));
}

function updateCard(id, pname){
    let card = document.getElementById(id);
    let children = card.childNodes;
    console.log(children);
    let used_url = URL.concat(pname)
    let response = fetch(used_url)
    .then((data => data.json()))
    .then((json) =>{
        children[0].innerText = capitalize(pname);
        children[1].src = json.sprites.front_default;
        children[2].innerText = "Hp: ".concat(json.stats[0].base_stat)
        children[3].innerText = "Atk: ".concat(json.stats[1].base_stat)
        children[4].innerText = "Def: ".concat(json.stats[2].base_stat)
        children[5].innerText = "Spatk: ".concat(json.stats[3].base_stat)
        children[6].innerText = "Spdef: ".concat(json.stats[4].base_stat)
        children[7].innerText = "Spd: ".concat(json.stats[5].base_stat)
    });
    
    
}
function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

