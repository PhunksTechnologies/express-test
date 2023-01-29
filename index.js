const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();

const port = 9878;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', "handlebars");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(`${__dirname}/public`));


app.get('/', (req, res) => {
    res.render('index');
} );

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
})