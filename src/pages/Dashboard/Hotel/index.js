import RoomsOfHotel from '../../../components/Rooms';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { useEffect, useState } from 'react';
import useToken from '../../../hooks/useToken';
import useHotels from '../../../hooks/api/useHotels';
import { getUserTicket } from '../../../services/ticketApi';
import HotelDescription from '../../../components/HotelInformation';

export default function Hotel() {
  const token = useToken();
  const [content, setContent] = useState(<></>);
  const [selectHotel, setSelectHotel] = useState(0);

  useEffect(() => {
    getUserTicket(token)
      .then((resp) => {
        if (resp.status === 'Reserved') {
          setContent(
            <>
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
              <MsgError>
                Sua modalidade de ingresso não inclui hospedagem <br /> Prossiga para a escolha de atividades
              </MsgError>
            </>
          );
        }
      })
      .catch(() => {
        setContent(
          <>
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
    if (hotels.hotels) {
      setContent(
        <>
          <Text>Primeiro, escolha seu hotel</Text>
          <ChooseHotels>
            {hotels.hotels.map((value, index) => (
              <HotelDescription value={value} key={index} selectHotel={selectHotel} setSelectHotel={setSelectHotel} />
            ))}
          </ChooseHotels>
        </>
      );
    }
  }, [hotels.hotelsLoading]);

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {content}
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
