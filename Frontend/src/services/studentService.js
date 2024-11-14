import api from '../utils/api';

export const bookSlot = async (studentId, instructorId, timeSlot) => {
  try {
    const response = await api.post('/students/book', { studentId, instructorId, timeSlot });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
