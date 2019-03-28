const express = require('express');
const routes = express.Router();
const dishesDb = require('./dishesHandlers');

const urlDishes = '/api/dishes';
const urlByDish = '/api/dishes/:id';

routes.use(express.json());

//GET ALL DISHES
routes.get(urlDishes, (req, res) => {
  dishesDb
    .getDishes()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: 'The users information could not be retrieved.' });
    });
});

//GET DISH BY ID
routes.get(urlByDish, (req, res) => {
  const { id } = req.params;
  dishesDb
    .getDish(id)
    .then(dish => {
      if (dish.length > 0) {
        res.status(200).json(dish);
      } else {
        res.status(404).json({ message: 'no dish exist with the provided id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'there was an error finding the dish' });
    });
});

//ADD A DISH
routes.post(urlDishes, (req, res) => {
  const entry = req.body;
  if (entry.name) {
    dishesDb
      .addDish(entry)
      .then(id => {
        res.status(201).json(id);
      })
      .catch(err => {
        res.status(500).json({ message: 'the dish could not be added' });
      });
  } else {
    res
      .status(404)
      .json({ message: 'please include a name field with your dish' });
  }
});

module.exports = routes;
