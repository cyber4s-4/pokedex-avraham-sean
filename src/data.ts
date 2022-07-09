async function fetchPokemonNames() {
    const data = await fetch(`https://pokeapi.co/api/v2/pokedex/1/`)
        .then(response => response.json());
    return data.pokemon_entries;

    // const data2 = await fetch(data.pokemon_entries[id-1].pokemon_species.url)
    //   .then(response => response.json());
};

export const pokemonsNames = fetchPokemonNames()
    .then(list => list.map((obj: any) => {
        return {
            name: obj.pokemon_species.name,
            id: obj.entry_number,
            url: obj.pokemon_species.url,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${obj.entry_number}.png`,
            specs: {
                type: "",
                weight: "",
                height: ""
            }
        };
    }));

export async function fetchOnePokemon(url: string) {
    let data = await fetch(url)
        .then(response => response.json());
    const types = data.types.map((obj: {
        slot: number,
        type: {
            name: string,
            url: string
        }
    })=>obj.type.name).join(", ");
    return {
        name: data.name,
        id: data.id,
        url: "",
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`,
        specs: {
            type: types,
            weight: data.weight/10 + ' kg',
            height: data.height*10 + ' cm'
        }
    };
};