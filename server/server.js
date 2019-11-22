const express = require('./config/express.js')
const express_2 = require('express')
const path = require('path')
// Use env port or default
const port = process.env.PORT || 5000;

const app = express.init()

if (process.env.NODE_ENV==='production') {
    app.use(express_2.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    });
}

app.listen(port, () => console.log(`Server now running on port ${port}!`));

