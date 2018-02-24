import express from 'express';
import fs from 'fs';

const server = express();

server.use(express.static('public/static'));

server.get('/', (req, res) => {
  // this is here for now just for ease of development
  const homepage = fs.readFileSync('./public/index.html', 'utf8');
  res.send(homepage);
});

server.listen(8080, () => console.log('Server running'));
