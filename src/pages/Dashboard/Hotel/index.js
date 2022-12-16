import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export default function Hotel() {
  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      <MsgError>
        Sua modalidade de ingresso não inclui hospedagem <br /> Prossiga para a escolha de atividades
      </MsgError>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const MsgError = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-align: center;
  font-size: 20px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  color: #8e8e8e;
`;
