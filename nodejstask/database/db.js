const { MongoClient } = require("mongodb")

const uri = ""
const client = new MongoClient(uri)

async function connectToMongoDB() {
  // try {
  //     await client.connect();
  //     console.log('Connected to MongoDB');
  //     return client.db('mydb'); // Replace 'mydb' with your database name
  // } catch (err) {
  //     console.error('Error connecting to MongoDB:', err);
  //     throw err;
  // }

  try {
    await client.connect()
    console.log("connect")
    return client.db("mydb")
  } catch (err) {
    throw err
  }
}

module.exports = connectToMongoDB
