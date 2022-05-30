const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json())
const imageRouter = require('./routers/imageRouter');

const dbURI = 'mongodb+srv://fangzsx:123123123@cluster0.jxdfu2m.mongodb.net/imagesdb?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then(() => {
        const PORT = 3000;
        app.listen(PORT, () => {
            console.log(`MONGO DB Status : connected \nListening with port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(`MONGO DB Status : not connected\nAn error occurred: ${error}`)
    })

app.use('/api/v1/', imageRouter);