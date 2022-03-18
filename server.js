// main file where server will run from
const PORT = process.env.PORT || 3003;

//instantiates server
const express = require(`express`);
const app = express();

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });