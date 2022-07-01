async function fetchPokemons() {
    const data = await fetch(`https://pokeapi.co/api/v2/pokedex/1/`)
        .then(response => response.json());
    console.log(data);
    return data.pokemon_entries;

    // const data2 = await fetch(data.pokemon_entries[id-1].pokemon_species.url)
    //   .then(response => response.json());
};
export const pokemonsNames = fetchPokemons()
    .then(list => list.map((obj: any) => {
        fetch(obj.pokemon_species.url)
        return {
            name: obj.pokemon_species.name,
            id: obj.entry_number,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${obj.entry_number}.png`,
            specs: {
                type: "",
                weight: "",
                height: ""
            }
        };
    }))
