const express = require('express');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.static('public'));

//parse application body as JSON
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs ({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//import routes & give server access
const routes = require('./controllers/burgers_controller.js');

app.use(routes);

app.listen(PORT, function() {
    console.log('Server listening on PORT' + PORT);
});


