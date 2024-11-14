// src/controllers/instructorController.js
import { addInstructor, getInstructor } from '../models/instructorModel.js';

const setAvailability = async (req, res) => {
  const { instructorId, availability } = req.body;
  try {
    await addInstructor(instructorId, availability);
    res.status(200).send('Availability set successfully.');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAvailability = async (req, res) => {
  const { instructorId } = req.params;
  try {
    const data = await getInstructor(instructorId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { setAvailability, getAvailability };
