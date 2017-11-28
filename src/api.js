const express = require('express');
const router = express.Router();
const neo4j = require('neo4j-driver').v1;

const driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', 'controlar'));
const session = driver.session();

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    session.run(
        'CREATE (a:Person {name: $name}) RETURN a',
        {name: 'test2'}
      ).then(result => {
        
        response.data = result;
        res.json(response);

      });
});

// Get users
router.get('/*', (req, res) => {
    sendError("Forbidden",res);
});

//session.close();
//driver.close();

module.exports = router;