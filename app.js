const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! hi im ajay marathe from DevOps team as a DevOps Engineer. "DevOps is a culture and we have to follow that culture"'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
