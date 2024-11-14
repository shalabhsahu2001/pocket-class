// src/routes/studentRoutes.js
import express from 'express';
import { bookSlot } from '../controllers/studentController.js';

const router = express.Router();

router.post('/book', bookSlot);

export default router;
