const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/products', (req, res) => {
  const url = 'https://dummyjson.com/products';
  request(url, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      res.send(body);
    } else {
      res.status(500).send({ error: 'Error fetching products' });
    }
  });
});

const PORT = 3000; // Choose any port you like
app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});
