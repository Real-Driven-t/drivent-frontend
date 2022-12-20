import RoomsOfHotel from '../Rooms';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import useHotels from '../../hooks/api/useHotels';
import HotelDescription from './HotelDescription';
import useTicket from '../../hooks/api/useTicket';
import ErrorWrapper from '../ErrorWrapper';

export const TicketStatus = Object.freeze({
  PAID: 'PAID',
  RESERVED: 'RESERVED',
});

export default function ValidateHotel() {
  const { ticket, ticketError } = useTicket();
  const [authStatus, setAutStatus] = useState({
    isAllowed: true,
    message: '',
  });

  const [content, setContent] = useState(<></>);
  const [selectHotel, setSelectHotel] = useState(null);

  useEffect(() => {
    if (ticket) verifyPermission();
    if (ticketError) {
      setAutStatus({
        isAllowed: false,
        message: 'Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem',
      });
    }
  }, [ticket, ticketError]);

  function verifyPermission() {
    if (ticket.status === TicketStatus.RESERVED) {
      setAutStatus({
        isAllowed: false,
        message: 'Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem',
      });
    } else if (ticket.TicketType.isRemote === true) {
      setAutStatus({
        isAllowed: false,
        message: 'Sua modalidade de ingresso não inclui hospedagem. Prossiga para a escolha de atividades',
      });
    } else {
      setAutStatus({ isAllowed: true });
    }
  }

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
          {!selectHotel ? '' : <RoomsOfHotel hotelId={selectHotel} />}
        </>
      );
    }
  }, [hotels.hotelsLoading, selectHotel]);

  return <>{!authStatus.isAllowed ? <ErrorWrapper>{authStatus.message}</ErrorWrapper> : content}</>;
}

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
