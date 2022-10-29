const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// const users = [
//     { id: 1, name: "Saqib", email: "saqib00@gmail.com" },
//     { id: 2, name: "Soleh", email: "soleh00@gmail.com" },
//     { id: 3, name: "Saad", email: "saad00@gmail.com" }
// ]

// f5u85z9pWkaK1Hok


const uri = "mongodb+srv://dbUser1:f5u85z9pWkaK1Hok@cluster0.csyc5ob.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        const usersCollection = client.db("simpleNode").collection("users");
        // const user = {name:"Wah wah", email:"jiji@gmail.com"};
        // const result = await usersCollection.insertOne(user);
        // console.log(result);

        app.get('/users', async (req, res) => {
            const cursor = usersCollection.find({});
            const users = await cursor.toArray();
            res.send(users);
        })

        app.post('/users', async (req, res) => {
            console.log("Post API hitted");
            const user = req.body;
            const result = await usersCollection.insertOne(user);
            user._id = result.insertedId;
            console.log(result);
            res.send(user);
        })

    } finally { }
}

run().catch(console.dir);


// app.get('/users', (req, res) => {
//     if (req.query.name) {
//         const search = req.query.name;
//         const filtered = users.filter(usr => usr.name.toLocaleLowerCase().indexOf(search) >= 0);
//         res.send(filtered);
//     }
//     else {
//         res.send(users);
//     }
// })



app.get('/', (req, res) => {
    res.send("Simple node server running");
});

app.listen(port, () => {
    console.log(`Node server running on ${port}`)
})