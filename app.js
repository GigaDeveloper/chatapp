const express = require("express");
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 8888;

app.get('/', function(req, res) {
    res.send('Hello world!');
});

// Start Server
app.listen(port, function() {
    console.log("Server started on port: " + port);
});
