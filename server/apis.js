const express = require("express");

let apis = (app) => {
    app.use(express.json());
    app.use('/api/user', require('../routers/User'));
};

module.exports = apis;