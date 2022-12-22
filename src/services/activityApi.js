import api from './api';

export async function getActivitiestWithPlace(token, body) {
  console.log(token);
  console.log(body);
  const response = await api.get('/activities', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
