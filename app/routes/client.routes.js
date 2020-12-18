module.exports = (app) => {
    const clients = require('../controllers/client.controller.js');


    app.post('/clients', clients.create);

    app.get('/clients', clients.getAll);


    app.get('/clients/:id', clients.getById);


    app.put('/clients/:id', clients.update);


    app.delete('/clients/:id', clients.delete);
}
