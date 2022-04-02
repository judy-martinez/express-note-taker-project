// main file where server will run from
const express = require(`express`);
const router = express.Router();
//instantiates server
const PORT = process.env.PORT || 3003;
const app = express();
const apiRoutes = require(`./routes/apiRoutes`);
const htmlRoutes = require(`./routes/htmlRoutes`);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });