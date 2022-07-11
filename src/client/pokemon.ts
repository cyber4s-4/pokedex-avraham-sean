export type pokemon_species = {
  name: string,
  id: string,
  url: string,
  pokemonTypes: string[],
  weight: string,
  height: string,
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
    ePokemon.addEventListener("click", () => {
      _parentEl.innerHTML = "";
      pokemonRenderer.detailed(_data,_parentEl);
    })
  }

  static detailed(_data: pokemon_species,_parentEl: HTMLElement) {
    const oPokemon = new pokemonRenderer(_data,_parentEl)
    const ePokemon: HTMLDivElement = document.createElement('div');
    ePokemon.innerHTML = `
      <img class="img" src="${oPokemon.data.img}"><br>
      <spam>${oPokemon.data.name}</spam><br>
      #${oPokemon.data.id}<br>
      type: ${oPokemon.data.pokemonTypes}<br>
      weight: ${+oPokemon.data.weight / 10} kg <br>
      height: ${+oPokemon.data.height * 10} cm  <br>
      </div>
      `;
    ePokemon.classList.add('onePokemonSpecs');
    ePokemon.setAttribute('id', oPokemon.data.id);
    oPokemon.parentEl.append(ePokemon);
  }
}
