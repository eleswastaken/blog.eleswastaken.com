
if (process.env.NODE_ENV == "DEVELOPMENT") {
  require('dotenv').config()
}
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const postsRouter = require('./routers/posts');
const adminRouter = require('./routers/admin');

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

app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser());

app.use('/posts', postsRouter);
app.use('/admin', adminRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})



const PORT = 5000

app.listen(PORT, () => {
  console.log('App is running...')
})
