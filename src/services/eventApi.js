import api from './api';
// eslint-disable-next-line
console.log(process.env.REACT_APP_API_BASE_URL);
export async function getEventInfo() {
  const response = await api.get('/event');
  return response.data;
}
//
