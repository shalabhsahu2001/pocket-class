// src/app.js
import express from 'express';
import bodyParser from 'body-parser';
import instructorRoutes from './routes/instructorRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import errorHandler from './utils/errorHandler.js';

const app = express();
app.use(bodyParser.json());

app.use('/api/instructors', instructorRoutes);
app.use('/api/students', studentRoutes);

app.use(errorHandler);

export default app;
