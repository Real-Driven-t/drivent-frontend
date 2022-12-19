import api from './api';

export async function postPayment({ token, ticketId, cardData }) {
  const response = await api.get('/payments/process', { ticketId, ...cardData }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
