export async function fetchServer() {
    return await fetch('/pokemonList', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data=>data.json());
}