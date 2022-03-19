// main file where server will run from
const express = require(`express`);

//instantiates server
const PORT = process.env.PORT || 3003;
const app = express();

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });