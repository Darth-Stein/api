const express = require('express');
const mongoose = require('mongoose');

const postRoute = require('./routes/datas');
const app = express();


mongoose.connect('mongodb+srv://Rafael:zawarudo@cluster0-d3qgg.gcp.mongodb.net/api6?retryWrites=true&w=majority', { useNewUrlParser: true } )

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/datas', postRoute);


app.get('/', (req,res) =>{
    res.send('Main page');
});

app.listen(3001);