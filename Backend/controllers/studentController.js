// src/controllers/studentController.js
import { addBooking } from '../models/studentModel.js';

const bookSlot = async (req, res) => {
  const { studentId, instructorId, timeSlot } = req.body;
  try {
    await addBooking(studentId, instructorId, timeSlot);
    res.status(200).send('Booking successful.');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { bookSlot };
