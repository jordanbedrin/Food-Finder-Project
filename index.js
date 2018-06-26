const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.static(`${__dirname}/build`))

app.get('/api/healthy', async (req, res) => {
  let data = await axios.get('https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJw32xfbK22YgRj2SSjvBQphY&key=AIzaSyBa-kZpNFClEClGW8R6jBjNVPsnLjaocmc');
  res.send(data);
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Listening on port " + port));
