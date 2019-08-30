const express = require('express');
const expbhs = require('express-handlebars');
const path = require('path');

const app = express();

//settings
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expbhs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layout'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routers
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log("Server trabajando");
});