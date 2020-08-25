// Using Express Router

const express = require('express');

// Importing my own router file "admin.js" and "shop.js"
const adminroutes = require('./router/admin');
const shoproutes = require('./router/shop');

const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended:false}))

app.use(shoproutes);

app.use(adminroutes);

app.listen(3000);

