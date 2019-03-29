const express = require('express');
const server = express();

const dishesRoutes = require('./routes/dishes');
const recipeRoutes = require('./routes/recipes');

server.use(dishesRoutes);
server.use(recipeRoutes);

module.exports = server;