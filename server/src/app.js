
const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

// Set up MongoDB connection
const mongoose = require('mongoose');
const mongooseDB = require('./schema/database');
const User = require('./schema/user').User;

app.get("/ping", (_, res) => {
    res.send("pong");
});

app.post("/login", (req, res) => {
    const login = require('./pages/account/login');
    login(req, res);
});

app.post("/register", (req, res) => {
    const register = require('./pages/account/register');
    register(req, res);
});

app.get("/org/[id]", (req, res) => {
    res.send("This is a page for an org")
});

app.post('/edit/org/[id]' ,(req, res) => {
    res.send("This is the page you call to save changes to edits to an org");
});

app.listen(port, () => {
    console.log("Server started on port "+ port);
});

