const express  = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World i am rajneesh and i am a remte sooftware developer at africa based startup as a backend engineer and work on next js and ndoe js wirh typescript!');
});

app.listen(3000 );

console.log("ENV VARIABLE");

console.log(process.env.MY_ENV_VARIABLE);