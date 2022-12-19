import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { useEffect } from 'react';
import useToken from '../../../hooks/useToken';
import { getUserTicket } from '../../../services/ticketApi';
import { useState } from 'react';

export default function Hotel() {
  const token = useToken();
  const [content, setContent] = useState(
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
    </>
  );

  useEffect(() => {
    getUserTicket(token)
      .then((resp) => {
        if (resp.status === 'Reserved') {
          setContent(
            <>
              <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
              <MsgError>
                Você precisa ter confirmado pagamento antes
                <br />
                de fazer a escolha de hospedagem
              </MsgError>
            </>
          );
        }

        if (resp.TicketType.includesHotel === false) {
          setContent(
            <>
              <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
              <MsgError>
                Sua modalidade de ingresso não inclui hospedagem <br /> Prossiga para a escolha de atividades
              </MsgError>
            </>
          );
        }
      })
      .catch((error) => {
        setContent(
          <>
            <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
            <MsgError>
              Você precisa ter confirmado pagamento antes
              <br />
              de fazer a escolha de hospedagem
            </MsgError>
          </>
        );
      });
  }, []);

  return content;
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
