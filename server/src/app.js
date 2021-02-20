
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
const Org = require('./schema/org').Org;

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

app.get("/me", (req, res) => {
    const me = require('./pages/account/me');
    me(req, res);
});

app.get("/orgs", (req, res) => {
    const viewOrgs = require('./pages/browser/searchOrgs');
    viewOrgs(req, res);
})

app.post("/delete", (req, res) => {
    const deleteOrgs = require('./pages/account/clearAllOrgs');
    deleteOrgs(req, res);
})

app.get("/org/:orgName", (req, res) => {
    const viewOrg = require('./pages/browser/viewOrg');
    viewOrg(req, res);
});

app.post("/org/:orgName/edit" ,(req, res) => {
    const editOrg = require('./pages/account/editOrg');
    editOrg(req, res);
});

app.listen(port, () => {
    console.log("Server started on port "+ port);
});
