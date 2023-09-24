//Imports
const express = require("express");
const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const {PORT} = require('./constants')
//Local variables
const app = express();

//cConfigs
expressConfig(app);
handlebarsConfig(app);

app.get("/", (req, res) => {
    // res.send("Hello from express server!");
    res.render("index");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));