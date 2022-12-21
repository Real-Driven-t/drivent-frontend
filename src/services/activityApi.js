import api from './api';

export async function getActivitiestWithPlace(body, token) {
  const response = await api.get('/activities', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
