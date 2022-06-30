const Events = require('../models/event.model');

const EventsController = {
    getAllEvents: async (req, res) => {
        try {
            const events = await Events.find();
            res.send(events)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    },
    getEventById: async (req, res) => {
        try {
            const event = await Events.findById(req.params.id);
            res.send(event)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    },
    deleteEvent: async (req, res) => {
        try {
            const event = await Events.findByIdAndDelete(req.params.id);
            res.send(event)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    },
    putEvent: async (req, res) => {
        try {
            const event = await Events.findByIdAndUpdate(req.params.id, req.body);
            res.send(event)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    },
    postEvent: async (req, res) => {
        try {
            const event = await Events.create(req.body);
            event.save();
            res.send(event);
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }
}

module.exports = EventsController;

// key mongo : root eH20UkmYRAFwAYOg