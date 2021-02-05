const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


// Connect to database
mongoose.connect('mongodb://localhost:27017/image-manager', {
    useNewUrlParser: true,
}, (err) => {
    if (err) console.error('Error: ', err);
    console.log('Connected to MongoDB');
});

//Setup Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(express.static('public'));

//Controllers (Model View Controller)
const ImageController = require('./controllers/imageController');


//API Routes
app.post('/upload', ImageController.uploadImage);
app.get('/retrieve', ImageController.retrieveImages);
app.post('/remove', ImageController.removeImage);

app.listen(3000, () => {
    console.log('Server has started on port %s', 3000);
});