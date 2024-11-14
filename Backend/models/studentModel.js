// src/models/studentModel.js
import { db } from '../config/firebase.js';

const addBooking = async (studentId, instructorId, timeSlot) => {
  try {
    const bookingData = { studentId, instructorId, timeSlot };
    await db.collection('bookings').add(bookingData);
  } catch (error) {
    throw new Error(`Error adding booking: ${error.message}`);
  }
};

export { addBooking };
