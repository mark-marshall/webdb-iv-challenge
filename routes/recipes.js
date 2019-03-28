const express = require('express');
const routes = express.Router();
const recipesDb = require('./recipesHandlers');

const urlRecipes = '/api/recipes';
//const urlByUser = '/api/dishes/:id';

routes.use(express.json());

//GET ALL RECIPES
routes.get(urlRecipes, (req, res) => {
  recipesDb
    .getRecipes()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: 'The users information could not be retrieved.' });
    });
});

//ADD A RECIPE
routes.post(urlRecipes, (req, res) => {
  const entry = req.body;
  if (entry.name) {
    recipesDb
      .addRecipe(entry)
      .then(id => {
        res.status(201).json(id);
      })
      .catch(err => {
        res.status(500).json({ message: 'the recipe could not be added' });
      });
  } else {
    res
      .status(404)
      .json({
        message:
          'please include a name field, and a valid dish_id with your recipe',
      });
  }
});

module.exports = routes;
