// src/routes/instructorRoutes.js
import express from 'express';
import { setAvailability, getAvailability } from '../controllers/instructorController.js';

const router = express.Router();

router.post('/availability', setAvailability);
router.get('/availability/:instructorId', getAvailability);

export default router;
