const express  = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.get('/contact', (req, res) => {
    res.send('Contact Us');
});


app.get('/products', (req, res) => {
    res.send('Our Products');
});

app.get('/services', (req, res) => {
    res.send('Our Services');
});

app.listen(3000 ); () => {
    console.log('Server is running on http://localhost:3000');
};