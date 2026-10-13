const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require('node:fs');

app.use(express.static('public'));

app.listen(PORT ,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Checking Git Functionality