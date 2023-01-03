import styled from 'styled-components';
import MuiButton from '@material-ui/core/Button';
import { AiFillGithub } from 'react-icons/ai';

export default function GithubButton({ variant = 'contained', children, ...props }) {
  return (
    <StyledMuiButton variant={variant} {...props}>
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
