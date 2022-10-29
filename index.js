const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const users = [
    { id: 1, name: "Saqib", email: "saqib00@gmail.com" },
    { id: 1, name: "Soleh", email: "soleh00@gmail.com" },
    { id: 1, name: "Saad", email: "saad00@gmail.com" }
]

app.get('/users', (req, res) => {
    res.send(users);
})

app.get('/', (req, res) => {
    res.send("Simple node server running");
});

app.listen(port, () => {
    console.log(`Node server running on ${port}`)
})