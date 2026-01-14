const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve your index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Serve the PNG file explicitly
app.get('/shire.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'shire.png'));
});


// MongoDB connection string (connects to Docker container from host)
const mongoUrl = "mongodb://admin:password@mongodb";


// Database and collection
const databaseName = "user-account";
const collectionName = "users";


console.log("test1");

// GET user profile
app.get('/get-profile', async (req, res) => {
    console.log("test2");
    const client = new MongoClient(mongoUrl);
    console.log("test3");
  try {
    await client.connect();
    const db = client.db(databaseName);
    const result = await db.collection(collectionName).findOne({ userid: 1 });
    res.send(result || {});
  } catch (err) {
    console.error("GET error:", err);
    res.status(500).send(err);
  } finally {
    await client.close();
  }
});

// POST update profile
app.post('/update-profile', async (req, res) => {
  const userObj = req.body;
  userObj.userid = 1;

  const client = new MongoClient(mongoUrl);
  try {
    await client.connect();
    const db = client.db(databaseName);

    const result = await db.collection(collectionName).updateOne(
      { userid: 1 },
      { $set: userObj },
      { upsert: true }
    );

    console.log("Mongo update result:", result);
    res.send(userObj);
  } catch (err) {
    console.error("POST error:", err);
    res.status(500).send(err);
  } finally {
    await client.close();
  }
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});

