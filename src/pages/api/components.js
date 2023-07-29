const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.42wwv.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // console.log("Database connected");
    // res.send("database connected");
    // Send a ping to confirm a successful connection
    const componentsCollection = client
      .db("pc_builder")
      .collection("components");

    if (req.method === "GET") {
      const components = await componentsCollection.find({}).toArray();
      res.send({ message: "success", status: 200, data: components });
    }

    if (req.method === "POST") {
      const components = req.body;
      const result = await componentsCollection.insertOne(components);
      res.json(result);
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

// run().catch(console.dir);

export default run;
