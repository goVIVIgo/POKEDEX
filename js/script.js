
const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);

    if (APIResponse.status = 200) {

        const data = await APIResponse.json();
        return data;
    }

}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'PROCURANDO...';
    pokemonNumber.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    if(data) {

        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    
        input.value = '';

    } else {

        pokemonName.innerHTML = 'NAO ACHEI NAO';
        pokemonNumber.innerHTML = '';

    }

}

form.addEventListener('submit', (event) => {

    event.preventDefault();
    renderPokemon(input.value);

});

renderPokemon('1');




