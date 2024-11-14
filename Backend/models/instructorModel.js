// src/models/instructorModel.js
import { db } from '../config/firebase.js';

const addInstructor = async (instructorId, availability) => {
  try {
    await db.collection('instructors').doc(instructorId).set({ availability }, { merge: true });
  } catch (error) {
    throw new Error(`Error setting instructor availability: ${error.message}`);
  }
};

const getInstructor = async (instructorId) => {
  try {
    const doc = await db.collection('instructors').doc(instructorId).get();
    if (!doc.exists) {
      throw new Error('Instructor not found');
    }
    return doc.data();
  } catch (error) {
    throw new Error(`Error getting instructor: ${error.message}`);
  }
};

export { addInstructor, getInstructor };
