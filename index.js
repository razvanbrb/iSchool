const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const api = require('./api');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/static', express.static(__dirname + '/client/build/static'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html');
});

app.use('/api', api);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));
