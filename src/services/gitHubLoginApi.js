import api from './api';

export async function signInWithGitHub(code) {
  const response = await api.post('/oauth/github/login', { code });
  return response.data;
}
