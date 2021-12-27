const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const path = require('path');
const {blogRoutes} = require('./src/routers');

const app = express();

app.set('view engine','ejs');
app.set('views', path.resolve(__dirname,'./src/views'));

app.use(express.urlencoded({extended: true}));
app.use(expressEjsLayouts);
app.use(express.static('public'));
app.use('/blog', blogRoutes);

app.listen(3000, () => console.log('Server Up'));