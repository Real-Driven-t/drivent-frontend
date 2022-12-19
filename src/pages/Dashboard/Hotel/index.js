import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { useEffect } from 'react';
import useToken from '../../../hooks/useToken';
import useHotels from '../../../hooks/api/useHotels';
import { getUserTicket } from '../../../services/ticketApi';
import { useState } from 'react';
import HotelDescription from '../../../components/HotelInformation';

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

  const hotels = useHotels();

  useEffect(() => {
    console.log(hotels);
    if (hotels.hotels) {
      setContent(
        <>
          <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
          <Text>Primeiro, escolha seu hotel</Text>
          <ChooseHotels>
            {hotels.hotels.map((value, index) => (
              <HotelDescription value={value} />
            ))}
          </ChooseHotels>
        </>
      );
    }
  }, [hotels.hotelsLoading]);

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

const Text = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #8e8e8e;
  margin: 0 0 10px 0;
`;

const ChooseHotels = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
