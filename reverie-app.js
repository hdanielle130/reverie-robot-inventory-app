const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

Host = require('./models/host');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/robotinventory');
var db = mongoose.connection;

app.get('/', (req, res) => {
    res.send('Please use /api/hosts');
});

app.get('/api/hosts', (req, res) => {
    Host.getHosts((err, hosts) => {
        if (err) {
            throw err;
        }
        res.json(hosts);
    });
});

app.get('/api/hosts/:_id', (req, res) => {
    Host.getHostById(req.params._id, (err, host) => {
        if (err) {
            throw err;
        }
        res.json(host);
    });
});

app.post('/api/hosts', (req, res) => {
    var host = req.body;
    Host.addHost(host, (err, host) => {
        if (err) {
            throw err;
        }
        res.json(host);
    });
});

app.put('/api/hosts/:_id', (req, res) => {
    var id = req.params._id;
    var host = req.body;
    Host.updateHost(id, host, {}, (err, host) => {
        if (err) {
            throw err;
        }
        res.json(host);
    });
});

app.delete('/api/hosts/:_id', (req, res) => {
    var id = req.params._id;
    Host.removeHost(id, (err, host) => {
        if (err) {
            throw err;
        }
        res.json(host);
    });
});

app.listen(3000);
console.log('Running on port 3000...');