/*
Keyrt með:
node 04.xss-log.js

Keyrir upp express þjón sem loggar heimsóknir á / og birtir á /log
Log upplýsingar geymdar í minni til einföldunar á dæmi.
Ef notandi sendir XSS í `user-agent` header mun það birtast á /log

Getum breytt user-agent með curl:
curl -A "<script>alert(1)</script>" http://localhost:3000
Eftir að hafa keyrt þetta mun „loggurinn“ okkar alerta "1" þegar við opnum.
*/

// Geymum log í minni meðan app keyrir, í raun gæti þetta verið í gagnagrunn
// logging þjónustu eða álíka
const log = [];

import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const logMessage = {
    time: new Date(),
    url: req.originalUrl,
    userAgent: req.header('User-Agent'), // Hér vantar XSS vörn!
  };

  log.push(logMessage);

  res.send('Halló heimur! <a href="/log">skoða log</a>');
});

app.get('/log', (req, res) => {
  const logs = log
    .map(i => `${i.time}\t${decodeURI(i.url)}\t${i.userAgent}`) // Ekki öruggt!
    .join('\n');
  res.send(`<pre>${logs}</pre>`);
});

const port = 3000;

app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}/`);
});
