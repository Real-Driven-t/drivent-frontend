import ErrorWrapper from '../ErrorWrapper';
import { Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import useTicket from '../../hooks/api/useTicket';

export const TicketStatus = Object.freeze({
  PAID: 'PAID',
  RESERVED: 'RESERVED',
});

export default function SelectActivities() {
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
        message: 'Você precisa ter selecionar seu ingresso antes de fazer a escolha de atividades',
      });
    }
  }, [ticket, ticketError]);

  function verifyPermission() {
    if (ticket.status === TicketStatus.RESERVED) {
      setAutStatus({
        isAllowed: false,
        message: 'Você precisa ter confirmado pagamento antes de fazer a escolha de atividades',
      });
    }

    if (ticket.TicketType.isRemote === true) {
      setAutStatus({
        isAllowed: false,
        message: 'Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.',
      });
    }
  }

  return (
    <>
      <Typography variant="h4">Escolha de atividades</Typography>
      {!authStatus.isAllowed ? <ErrorWrapper>{authStatus.message}</ErrorWrapper> : <>'Atividades: Em breve!'</>}
    </>
  );
}
