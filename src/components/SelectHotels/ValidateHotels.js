import { useEffect, useState } from 'react';
import useTicket from '../../hooks/api/useTicket';
import ErrorWrapper from '../ErrorWrapper';
import HotelsRender from './Hotels';

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

  return <>{!authStatus.isAllowed ? <ErrorWrapper>{authStatus.message}</ErrorWrapper> : <HotelsRender />}</>;
}
