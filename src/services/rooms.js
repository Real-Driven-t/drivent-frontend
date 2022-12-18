import api from './api';

export async function getRooms(hotelId, token) {
  const response = await api.get(`/rooms/${hotelId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
