import axios from 'axios';

// Create an Axios instance pointing at the backend API.
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust if backend URL changes
});

export const getCaterers = async (params) => {
  try {
    const response = await api.get('/caterers', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching caterers:', error);
    throw error;
  }
};

export const getCatererById = async (id) => {
  try {
    const response = await api.get(`/caterers/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching caterer with id ${id}:`, error);
    throw error;
  }
};

export const createCaterer = async (catererData) => {
  try {
    const response = await api.post('/caterers', catererData);
    return response.data;
  } catch (error) {
    console.error('Error creating caterer:', error);
    throw error;
  }
};

export default api;
