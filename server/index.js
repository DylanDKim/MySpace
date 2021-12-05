const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const token = require('../config.js');

//app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('./client/dist'));

app.get('/query/:query', (req, res) => {
  const { query } = req.params;
  console.log('enters server');
  axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=SA3-RGxizfHncoT0p-e5WEbdIRm0tj_eFlMDzSohqig&page=1&per_page=7`)
  .then(data => {
    console.log(data.data.results);
    res.send(data.data.results);
  })
  .catch((err) => {
    console.log(err);
    res.sendStatus(400);
  })

})

app.listen(port, () => {
  console.log(`App listening at port: ${port}`);
});
