# Note to Readers
This project was quite a challenge for me. I enjoyed learning what I could in the 10 days alotted.
I worked everyday possible, but did not get the application fully functioning as I had hoped.

The API, code repository, mongo database, and server side are running well in local.
The client is up and running but I didn't get to connecting the components.
Thus I did not make it to mapping the input nor to my automated testing and it is not up on the Vagrant VM.

I am very proud of what I accomplished in such a short amount of time considering. I don't have expereince with much of the software  or frameworks chosen. I have never used Visual Studio Code, Node.js, React.js, MongoDB (nosql) prior to, nor have I used the other components which I didn't get a chance to (chai/mocha, vagrant, etc). 

I feel that with a little guidance and a couple "ah-hah" moments I could be great if given the chance to work with the front-end and automation testing, as I simply don't have the expereince yet as we talked about in the interviews.

Thank you for considering me as a candidate. I would love to work for and create software with RiverStone and gain experience as a full-stack developer and team member.

# Installation
Install MongoDB
Create db robotinventory with a collection called hosts.
After running your mongod exe and mongo exe is running use the terminal to
  create a 'robotinventory' database and create a collection where you can insert hosts

Leave the mongo.exe running as a connection will be made in the code. It should be running on port 27017

Install dependencies for server
npm install

Install dependencies for client
npm run client-install

Run the client & server with concurrently
npm run dev

Run the Express server only
npm run server

Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
You can use the restful API accordingly in the server.js file to get, post, put, and delete hosts
Unique ids are created automatically, however I did not get to create the function to make simple ids.
When a host is added the id created by mongoDB is returned.

# Request Response examples
post: http://localhost:5000/reverie/hosts/addHost
req body = {
        "id": "1",
        "date_added": "5/25/2018",
        "first_active": "5/25/2018",
        "current_name": "Test Host",
        "height": 68,
        "weight": 180,
        "intelligence_metric": 17
    }
resp body = {
    "hostId": "5b07a7508e29be75da7a334a"
}

get: http://localhost:5000/reverie/hosts
resp body: [ {
        "_id": "5b07a7508e29be75da7a334a",
        "id": "1",
        "date_added": "5/25/2018",
        "first_active": "5/25/2018",
        "current_name": "Test Host",
        "height": 68,
        "weight": 180,
        "intelligence_metric": 17
    } ]

put: http://localhost:5000/reverie/hosts/updateHost/5b07a7508e29be75da7a334a
resp body: {
    "host_updated": "5b07a7508e29be75da7a334a"
}

delete: http://localhost:5000/reverie/hosts/5b07a7508e29be75da7a334a
resp body: {
    "host_deleted": "5b07a7508e29be75da7a334a"
}

# Reverie - Inventory Tracking App

Dr. Robert Ford has hired Riverstone to develop an application for
managing his inventory of robots. There are certain characteristics that he
would like to track for all robots. The app should have a front-end and a
back-end component.

## Backend

The backend service should provide a RESTful API to interact with the data.
The backend should be written in Node JS, and all of the testing should be done
with Chai/Mocha. See the OpenAPI definition in the repo for details about the
endpoints which should be exposed. Note: Some elements in the OpenAPI definition
will need to be filled in (host, basePath, operationIds). 


## Frontend

The frontend will allow Dr. Ford the ability to perform the following actions.

* Add new robots
* View details for existing entries
* Modify details for existing entries
* Delete existing entry

The frontend should be written as a single page application in JavaScript with
the React framework. All of the testing should be written using Jest/Enzyme.


## Continuous Integration

Circle CI should be used to automate testing of the code base.


## Vagrant

Included in the repo is a basic Vagrantfile. Your app should run in the Vagrant
VM with instructions on how to get it to work (if it's not automated by the
Vagrantfile). If you've never used Vagrant, you can get information about how
to get started [here](https://www.vagrantup.com/intro/getting-started/).
