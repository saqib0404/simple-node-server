const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.Port || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send("Simple node server running");
});

app.listen(port, () => {
    console.log(`Node server running on ${port}`)
})