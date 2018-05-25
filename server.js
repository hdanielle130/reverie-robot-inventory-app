const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const reverieApp = express();
const port = process.env.PORT || 5000;

reverieApp.use(express.static(__dirname+'/client'));
reverieApp.use(bodyParser.json());

Host = require('./models/host');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/robotinventory');
var db = mongoose.connection;

reverieApp.get('/', (req, res) => {
    res.send('Please use /reverie/hosts');
});

reverieApp.get('/reverie/hosts', (req, res) => {
    Host.getHosts((err, hosts) => {
        if(err){
            throw err;
        }
        res.json(hosts);
    });
});

reverieApp.get('/reverie/hosts', (req, res) => {
    Host.getHosts((err, hosts) => {
        if (err) {
            throw err;
        }
        res.json(hosts);
    });
});

reverieApp.get('/reverie/hosts/:_id', (req, res) => {
    Host.getHostById(req.params._id, (err, host) => {
        if (err) {
            throw err;
        }
        res.json(host);
    });
});

reverieApp.post('/reverie/hosts/addHost', (req, res) => {
    var host = req.body;
    Host.addHost(host, (err, host) => {
        if (err) {
            throw err;
        }
        res.json({hostId: host._id});
    });
});

reverieApp.put('/reverie/hosts/updateHost/:_id', (req, res) => {
    var id = req.params._id;
    var host = req.body;
    Host.updateHost(id, host, {}, (err, host) => {
        if (err) {
            throw err;
        }
        res.json({hostId_updated: host._id});
    });
});

reverieApp.delete('/reverie/hosts/:_id', (req, res) => {
    var id = req.params._id;
    Host.removeHost(id, (err, host) => {
        if (err) {
            throw err;
        }
        res.json({hostId_deleted: host._id});
    });
});

reverieApp.listen(port, () => console.log(`Server running on port ${port}`));