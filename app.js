
if (process.env.NODE_ENV == "DEVELOPMENT") {
  require('dotenv').config()
}
const express = require('express')
const mongoose = require('mongoose');

function connectMongoDB() {

  const mongoDB = process.env.MONGODB_URI;
  mongoose.set('strictQuery', false)
  mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

  const db = mongoose.connection;

  db.on('open', () => console.log('Connected to MongoDB'))

  db.on("error", console.error.bind(console, "MongoDB connection error:")); 
}

connectMongoDB()

const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})



const PORT = 5000

app.listen(PORT, () => {
  console.log('App is running...')
})
