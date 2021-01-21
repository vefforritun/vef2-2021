/*
Keyrt með:
node 08.static.js

Nota express.static() middleware til að gera skrár úr /public aðgengileg. Getum skoðað:
http://127.0.0.1:3000/style.css
*/
import express from 'express';

const app = express();

// Ef við værum að nota CommonJS væri línan svona, nýtti
// __dirname galdrabreytu
// app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(new URL('./public', import.meta.url).pathname));

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
