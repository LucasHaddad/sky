const express = require('express');
const app = express();

app.get('/author', function (req, res) {
    res.status(200);
    res.json({author: "Lucas Haddad"});
});

app.all(['/:route', '/'], function (req, res) {
    res.status(404);
    res.json({message: "Not found!"});
});

app.listen(3000, function () {
    console.log('TechMahindra/SKY API listening on port 3000!');
});