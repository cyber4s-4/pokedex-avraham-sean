import { MongoClient, Db, Collection/*, WithId*/ } from 'mongodb';
import fs from 'fs';
import path from 'path';

interface Item {
    name: string,
    id: number,
    img: string,
    pokemonTypes: string[],
    height: number,
    weight: number
}

export default async function run() {
    const uri = "mongodb+srv://avrahamleibman:M0ng0S0d1@greatcluster.l9vh6.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
    await client.connect();
    const db: Db = client.db('pokedex');
    const coll: Collection<Item> = db.collection('pokemons');
    await createDB(coll);
    // await get20Pokemons(coll);
    } finally {
        await client.close();
    }
}

async function createDB(pokemonColl: Collection<Item>) {
    await pokemonColl.deleteMany({});
    console.log("earased");
    
    const read: Buffer = await fs.promises.readFile(path.join(__dirname, "pokemonData.json"));
    const pokemonlist: Item[] = JSON.parse(read.toString());
    await pokemonColl.insertMany(pokemonlist);
    console.log("created database");
}

// async function get20Pokemons(pokemonColl: Collection<Item>) {
//     pokemonColl.find({id: {"$lst": 31, "$grt": 0}});


// }

run().catch(console.log).then(console.log);
