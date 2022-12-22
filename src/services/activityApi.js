import api from './api';

export async function getActivitiestWithPlace(token, body) {
  const response = await api.get(`/activities/${body}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function createRegisterActivity(token, body) {
  const response = await api.post('/activities', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
