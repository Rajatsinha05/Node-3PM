
const express = require('express');

const app = express();

app.get("/", (req, res) => {

    res.send("Welcome to the app!");

})





app.listen(8090, () => {
    console.log("listening on port 8090");
})