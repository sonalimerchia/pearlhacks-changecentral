
const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const frontendURL = require("./constants").FRONTEND_URL;

app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors());

// Set up MongoDB connection
const mongoose = require('mongoose');
const mongooseDB = require('./schema/database');
const Org = require('./schema/org').Org;
const PasswordReset = require('./schema/passwordReset').PasswordReset;

app.get("/ping", (_, res) => {
    res.send("pong");
});

app.post("/login", (req, res) => {
    const login = require('./pages/account/login');
    login(req, res);
});

app.post("/register", (req, res) => {
    console.log("hello");
    const register = require('./pages/account/register');
    register(req, res);
});

app.get("/me", (req, res) => {
    const me = require('./pages/account/me');
    me(req, res);
});

app.post("/org/:orgName/edit" ,(req, res) => {
    const editOrg = require('./pages/account/editOrg');
    editOrg(req, res);
});

app.post("/forgot-password", (req, res) => {
    const forgotPassword = require('./pages/account/forgotPassword').forgotPassword;
    forgotPassword(req, res);
});

app.post("/change-password/:token", (req, res) => {
    const forgotPassword = require('./pages/account/forgotPassword').resetPassword;
    forgotPassword(req, res);
})

app.get("/orgs", (req, res) => {
    const searchOrgs = require('./pages/browser/searchOrgs');
    searchOrgs(req, res);
})

app.get("/org/:orgName", (req, res) => {
    const viewOrg = require('./pages/browser/viewOrg');
    viewOrg(req, res);
});

app.listen(port, () => {
    console.log("Server started on port "+ port);
});
