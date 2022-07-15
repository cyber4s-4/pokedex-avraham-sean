import { MongoClient, Db, Collection/*, WithId*/ } from 'mongodb';
import fs from 'fs';
import path from 'path';

interface Item {
    name: string,
    id: string,
    img: string,
    pokemonTypes: string[],
    height: string,
    weight: string
}

export default async function run() {
    const uri = "mongodb+srv://avrahamleibman:M0ng0S0d1@greatcluster.l9vh6.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
    await client.connect();
    const db: Db = client.db('pokedex');
    const pokemons: Collection<Item> = db.collection('pokemons');
    await pokemons.deleteMany({});
    console.log("earased");
    
    const read: Buffer = await fs.promises.readFile(path.join(__dirname, '../../server/pokemonData.json'));
    const pokemonlist: Item[] = JSON.parse(read.toString());
    await pokemons.insertMany(pokemonlist);
    return 'created database';
    } finally {
        await client.close();
    }
}

run().catch(console.log).then(console.log);
