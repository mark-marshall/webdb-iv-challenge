const express = require('express');
const routes = express.Router();

//const dbUsers = require('../data/helpers/dishDb');

//const url = '/api/dishes';
//const urlByUser = '/api/dishes/:id';

routes.use(express.json());

module.exports = routes;