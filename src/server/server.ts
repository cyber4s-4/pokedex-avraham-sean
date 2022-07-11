import path from 'path';
import express, { Express } from 'express';
import cors from 'cors';
import { json } from 'body-parser';

const app: Express = express();
app.use(cors());
app.use(json());
const root: string = path.join(process.cwd(), 'dist');

app.use(express.static(root));

app.post('/pokemonList', (_req, res) => {
  res.sendFile(path.join(__dirname, 'pokemonData.json'));
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Hosted: http://localhost:' + port);
});
