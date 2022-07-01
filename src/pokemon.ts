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

export default class pokemonList {
  data: pokemon_species;
  parentEl: HTMLElement;
  constructor(_data: pokemon_species, _parentEl: HTMLElement) {
    this.data = _data;
    this.parentEl = _parentEl;
    this.render();

  }

  render() {
    const pokemon: HTMLDivElement = document.createElement('div');
    pokemon.innerHTML = `
      Name: ${this.data.name}<br>
      #${this.data.id}<br>
      type: ${this.data.specs.type}<br>
      weight: ${this.data.specs.weight}  <br>
      height: ${this.data.specs.height}  <br>
      <img class="img" src="${this.data.img}">
      </div>
      `;
    pokemon.classList.add('pokemonSpecs');
    pokemon.setAttribute('id', this.data.id)
    this.parentEl.append(pokemon)
  }
}