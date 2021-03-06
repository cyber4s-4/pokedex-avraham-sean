import path from 'path';
import express, { Express } from 'express';
import cors from 'cors';
import { json } from 'body-parser';
// let mongodbClientEncryption;
// try {
//   mongodbClientEncryption = require('mongodb-client-encryption');
// } catch (err) {
//   // don't do anything;
// }
// import createDB from './database'

const app: Express = express();
app.use(cors());
app.use(json());
const root: string = path.join(__dirname, '../client');

app.use(express.static(root));

app.post('/pokemonList', (_req, res) => {
  res.sendFile(path.join(__dirname, 'pokemonData.json'));
});


// createDB().catch(console.log).then(console.log);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Hosted: http://localhost:' + port);
});
