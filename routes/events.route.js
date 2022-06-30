const express = require('express');
const router = express.Router();
const EventsController = require('../controller/events.controller');

router.get('/events', EventsController.getAllEvents);

router.get('/events/:id', EventsController.getEventById);

router.delete('/events/:id', EventsController.deleteEvent);

router.put('/events/:id', EventsController.putEvent);

router.post('/events', EventsController.postEvent);

module.exports = router;