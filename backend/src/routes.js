const express = require('express');
const crypto = require('crypto');

const OngController = require('./controllers/ongController');
const IncidentController = require('./controllers/IncidentController');

const ProfileController = require('./controllers/ProfileControler');

const SessionControler = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.post('/sessions', SessionControler.create);

module.exports = routes;
