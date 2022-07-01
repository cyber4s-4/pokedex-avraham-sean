import { pokemonsNames } from "./data";
import pokemonList from "./pokemon";
type pokemon_species = {
  name: string,
  id: string,
  specs: {
    type: string,
    weight: string,
    height: string
  },
  img: string
}
async function init() {
  const list: pokemon_species[] = await pokemonsNames;
  const eMain = document.getElementsByClassName("list")[0] as HTMLDivElement;
  for (let i = 0; i < 15; i++) {
    const id: number = Math.floor(Math.random()*list.length)
    new pokemonList(list[id], eMain);
  }
}

init()
