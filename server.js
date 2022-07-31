// Requiring npm dependencies
const express = require("express");
const fs = require("fs");
const sql = require("mysql2");
const inquirer = require("inquirer");

const sequelize = require("./config/connection");

// Creating express variable and defining the port
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Now listening at port ${PORT}`)
    })
});

inquirer.prompt([
    
])

