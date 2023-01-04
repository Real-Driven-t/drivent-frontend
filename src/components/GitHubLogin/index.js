import styled from 'styled-components';
import MuiButton from '@material-ui/core/Button';
import { AiFillGithub } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import UserContext from '../../contexts/UserContext';
import { signInWithGitHub } from '../../services/gitHubLoginApi';

async function redirectToGitHub() {
  const GITHUB_URL = 'https://github.com/login/oauth/authorize';
  const params = {
    response_type: 'code',
    scope: 'user',
    //client_id: 'cd2e7919be740e90c5a4',
    client_id: process.env.REACT_APP_CLIENT_ID,
    redirect_uri: process.env.REACT_APP_REDIRECT_URI,
  };

  const queryString = '?' + new URLSearchParams(params).toString();
  window.location.href = `${GITHUB_URL}?${queryString}`;
}

export default function GithubButton({ variant = 'contained', children, ...props }) {
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);

  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  const teste = process.env;
  console.log(teste);

  // prettier-ignore
  useEffect(async() => {
    if (code) {
      try {
        const userData = await signInWithGitHub(code);
        setUserData(userData);
        toast('Login realizado com sucesso!');
        navigate('/dashboard');
      } catch (err) {
        toast('Não foi possível fazer o login!');
      }
    }
  }, []);

  return (
    <StyledMuiButton variant={variant} {...props} onClick={redirectToGitHub}>
      <GitHubIcon />
      {children}
    </StyledMuiButton>
  );
}

const StyledMuiButton = styled(MuiButton)`
  margin-top: 8px !important;
  background-color: #333333 !important;
`;

const GitHubIcon = styled(AiFillGithub)`
  font-size: 21px;
  margin-right: 5px;
  margin-bottom: 5px;
`;
