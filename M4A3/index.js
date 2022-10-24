const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const express = require('express');
const mongoose = require('mongoose');
const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
  );
  
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
      //useCreateIndex: true,
      //useFindAndModify: false
    })
    .then(() => console.log('DB connection successful!'));
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`App server running on ${3000}`)
})