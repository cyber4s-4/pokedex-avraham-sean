import {fetchOnePokemon} from "./data"
type pokemon_species = {
  name: string,
  id: string,
  url: string,
  specs: {
    type: string,
    weight: string,
    height: string
  },
  img: string
}

export class pokemonRenderer {
  data: pokemon_species;
  parentEl: HTMLElement;
  constructor(_data: pokemon_species, _parentEl: HTMLElement) {
    this.data = _data;
    this.parentEl = _parentEl;

  }

  static general(_data: pokemon_species,_parentEl: HTMLElement) {
    const oPokemon = new pokemonRenderer(_data,_parentEl)
    const ePokemon: HTMLDivElement = document.createElement('div');
    ePokemon.innerHTML = `
      <img class="img" src="${oPokemon.data.img}"><br>
      ${oPokemon.data.name}<br>
      #${oPokemon.data.id}<br>`;
    ePokemon.classList.add('pokemonSpecs');
    ePokemon.setAttribute('id', oPokemon.data.id);
    oPokemon.parentEl.append(ePokemon);
    ePokemon.addEventListener("click", () => fetchAndRender(_data))
  }

  static detailed(_data: pokemon_species,_parentEl: HTMLElement) {
    const oPokemon = new pokemonRenderer(_data,_parentEl)
    const ePokemon: HTMLDivElement = document.createElement('div');
    ePokemon.innerHTML = `
      <img class="img" src="${oPokemon.data.img}"><br>
      <spam>${oPokemon.data.name}</spam><br>
      #${oPokemon.data.id}<br>
      type: ${oPokemon.data.specs.type}<br>
      weight: ${oPokemon.data.specs.weight}  <br>
      height: ${oPokemon.data.specs.height}  <br>
      </div>
      `;
    ePokemon.classList.add('onePokemonSpecs');
    ePokemon.setAttribute('id', oPokemon.data.id);
    console.log(ePokemon);
    console.log(oPokemon.parentEl);
    oPokemon.parentEl.append(ePokemon);
  }
}


export async function fetchAndRender(obj: pokemon_species) {
  const eMain = document.getElementsByClassName("list")[0] as HTMLDivElement;
  const pokemon = await fetchOnePokemon(`https://pokeapi.co/api/v2/pokemon/${obj.id}`);
  eMain.innerHTML = "";
  pokemonRenderer.detailed(pokemon,eMain);
}