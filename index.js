const express = require('express');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env file


const app = express();


app.use('/', express.static(path.join(__dirname, 'static')))


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
