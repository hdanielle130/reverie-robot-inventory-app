const mongoose = require('mongoose');

// Host Schema
const hostSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
            //unique id for a specific robot
    },
    date_added: {
        type: String,
        required: true
            //format as date
            //date added to the inventory system
    },
    first_active: {
        type: String,
        required: true
            //format as date
            //date the robot was first activated
    },
    current_name: {
        type: String,
        required: true
            //the name the robot calls itself, first and last
    },
    height: {
        type: Number,
        required: true
            //format as float
            //height, in inches
    },
    weight: {
        type: Number,
        required: true
            //format as float
            //weight, in pounds
    },
    intelligence_metric: {
        type: Number,
        required: true
            //format as integer
            //scale of min 1 to max 20, where 20 is max intelligence
    }
    // create_date: {
    //     type: Date,
    //     default: Date.now
    // }
});

const Host = module.exports = mongoose.model('Host', hostSchema);

// Get Hosts
module.exports.getHosts = (callback, limit) => {
    Host.find(callback).limit(limit);
}

// Get Host
module.exports.getHostById = (id, callback) => {
    Host.findById(id, callback);
}

// Add Host
module.exports.addHost = (host, callback) => {
    Host.create(host, callback);
}

// Update Host
module.exports.updateHost = (id, host, options, callback) => {
    var query = { _id: id };
    var update = {
        date_added: host.date_added,
        first_active: host.first_active,
        current_name: host.current_name,
        height: host.height,
        weight: host.weight,
        intelligence_metric: host.intelligence_metric,
    }
    Host.findOneAndUpdate(query, update, options, callback);
}

// Delete Host
module.exports.removeHost = (id, callback) => {
    var query = { _id: id };
    Host.remove(query, callback);
}