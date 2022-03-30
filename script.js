function getPokemon() {
    let pokemon = document.getElementById("pokemon").value
    console.log(pokemon)
    const url = "https://pokeapi.co/api/v2/pokemon/" + pokemon
    let pokemonData
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let height = data.height
        let weight = data.weight
        document.getElementById("height").innerHTML = "height = " + height
        document.getElementById("weight").innerHTML = "weight = " + weight
    })
}