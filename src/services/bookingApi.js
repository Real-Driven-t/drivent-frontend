import api from './api';

export async function getBooking(token) {
  const response = await api.get('/booking', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function createBooking(token, roomId) {
  const response = await api.post(
    '/booking',
    { roomId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}

export async function updateBooking(roomId, bookingId, token) {
  const response = await api.put(
    `/booking/${bookingId}`,
    { roomId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}
