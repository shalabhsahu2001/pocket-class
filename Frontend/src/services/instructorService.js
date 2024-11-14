import api from '../utils/api';

export const setAvailability = async (instructorId, availability) => {
  try {
    const response = await api.post('/instructors/availability', { instructorId, availability });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAvailability = async (instructorId) => {
  try {
    const response = await api.get(`/instructors/availability/${instructorId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
