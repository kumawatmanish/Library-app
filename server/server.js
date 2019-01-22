const express = require('express');
const bodyParser = require('body-parser');

const {mongoose}  = require('./db/mongoose');
const Author = require('./model/author');
const Book = require('./model/book');
const BookInstance = require('./model/bookInstance');

var app = express();
app.use(bodyParser.json());
app.post('/author',(req, res) => {
    var author  = new Author({
        name : req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        dateOfDeath: req.body.dateOfDeath
    });

    author.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(8888, () => {
    console.log('Server started on port 8888');
});

