import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const port = 3000
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})