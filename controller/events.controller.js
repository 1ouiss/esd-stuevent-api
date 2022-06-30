const events = [
    {
      id: 1,
      name: 'Event 1',
      date: '2020-01-01',
      time: '10:00',
      description: 'This is the first event',
      author: 'John Doe',
      image: 'https://placehold.it/300x300',
    },
    {
      id: 2,
      name: 'Event 2',
      date: '2020-01-01',
      time: '10:00',
      description: 'This is the second event',
      author: 'John Doe',
      image: 'https://placehold.it/300x300',
    }
];

const EventsController = {
    getAllEvents: (req, res) => {

        res.send(events);
    },
    getEventById: (req, res) => {
        console.log("get one event : ", req.params.id);
        const event = events.find(event => event.id === parseInt(req.params.id));
        if (!event) {
            res.status(404).send({ message: `Event with id ${req.params.id} not found` });
        }
        res.send(event)
    },
    deleteEvent: (req, res) => {
        console.log("delete event : ", req.params.id);
        const event = events.find(event => event.id === parseInt(req.params.id));
        if (!event) {
            res.status(404).send({ message: `Event with id ${req.params.id} not found` });
        }
        events.splice(events.indexOf(event), 1);
        res.send(event);
    },
    putEvent: (req, res) => {
        console.log("put event : ", req.params.id);
        let event = events.find(event => event.id === parseInt(req.params.id));
        if (!event) {
            res.status(404).send({ message: `Event with id ${req.params.id} not found` });
        }
        events[events.indexOf(event)] =  {
        ...event,
        ...req.body
        };
        console.log("put event : ", req.body);
        res.send(event);
    },
    postEvent: (req, res) => {
        console.log("post event : ", req.body);
        const event = {
            id: events.length + 1,
            ...req.body
        };
        events.push(event);
        res.send(event);
    }
}

module.exports = EventsController;