// main file where server will run from

//instantiates server
const express = require(`express`);
const app = express();

app.listen(3003, () => {
    console.log(`API server now on port 3003!`);
  });