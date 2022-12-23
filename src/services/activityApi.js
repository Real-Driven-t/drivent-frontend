import api from './api';

export async function getActivitiestWithPlace({ token, params }) {
  const response = await api.get(`/activities/day/${params}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getDaysWithActivities(token) {
  const response = await api.get('/activities/days', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
