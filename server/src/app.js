
const userInterface = require("./schema/user");

const express = require("express");
app = express();
const port = 4000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

// Set up MongoDB connection
const mongoose = require('mongoose');
const mongooseDB = require('./schema/database');

// Set up Schema
const userSchema = new mongoose.Schema(userInterface);
const User = mongoose.model("User", userSchema);

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.post("/login", (req, res) => {
    res.send("This is the login page");
});

app.post("/register", (req, res) => {
    res.send("This is the register page");
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

