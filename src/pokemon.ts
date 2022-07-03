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

export default class pokemonList {
  data: pokemon_species;
  parentEl: HTMLElement;
  constructor(_data: pokemon_species, _parentEl: HTMLElement) {
    this.data = _data;
    this.parentEl = _parentEl;

  }

  static render1(_data: pokemon_species,_parentEl: HTMLElement) {
    const oPokemon = new pokemonList(_data,_parentEl)
    const ePokemon: HTMLDivElement = document.createElement('div');
    ePokemon.innerHTML = `
      <img class="img" src="${oPokemon.data.img}"><br>
      ${oPokemon.data.name}<br>
      #${oPokemon.data.id}<br>`;
    ePokemon.classList.add('pokemonSpecs');
    ePokemon.setAttribute('id', oPokemon.data.id);
    oPokemon.parentEl.append(ePokemon);
  }

  static render2(_data: pokemon_species,_parentEl: HTMLElement) {
    const oPokemon = new pokemonList(_data,_parentEl)
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
    oPokemon.parentEl.append(ePokemon);
  }
}

