import { pokemonsNames, fetchOnePokemon} from "./data";
import pokemonList from "./pokemon";
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
async function init() {
  const list: pokemon_species[] = await pokemonsNames;
  const eMain = document.getElementsByClassName("list")[0] as HTMLDivElement;
  for (let i = 0; i < 30; i++) {
    pokemonList.render1(list[i], eMain);
  }
  const eRundomButtom = document.getElementsByClassName("get-random")[0] as HTMLButtonElement;;
  eRundomButtom.addEventListener("click", ()=>{
    eMain.innerHTML = "";
    for (let i = 0; i < 30; i++) {
      const id: number = Math.floor(Math.random()*list.length)
      pokemonList.render1(list[id], eMain);
    }
  });
  const eSearchInput = document.getElementsByClassName("search-input")[0] as HTMLInputElement;
  const eSearchButton = document.getElementsByClassName("search-button")[0] as HTMLButtonElement;
  eSearchInput.addEventListener("keyup",(e)=>{
    if (e.key == "Enter") searching(eSearchInput,list);
  });
  eSearchButton.addEventListener("click",()=>searching(eSearchInput,list));
}
function searching(eSearchInput: HTMLInputElement, list: pokemon_species[]) {
  const sSearchInput = eSearchInput.value;
  const found: pokemon_species | undefined = list.find(pokenon=>{
    if (sSearchInput == pokenon.name || sSearchInput == `${pokenon.id}`) {
      return true;
    }
  });
  if (found) {
    specsList(found);
  } else alert("pokemon hasn't found");
}
async function specsList(obj: pokemon_species) {
  const eMain = document.getElementsByClassName("list")[0] as HTMLDivElement;
  const pokemon = await fetchOnePokemon(`https://pokeapi.co/api/v2/pokemon/${obj.id}`);
  eMain.innerHTML = "";
  pokemonList.render2(pokemon,eMain);
}
init();
