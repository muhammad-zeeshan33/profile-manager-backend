const Router = require('express').Router();

const {create, update, get, remove} = require('../controllers/profileController');

Router.post('/',  create);
Router.put('/',  update);
Router.get('/',  get);
Router.delete('/', remove);

module.exports = Router;
