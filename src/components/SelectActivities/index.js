import ErrorWrapper from '../ErrorWrapper';
import { Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import useTicket from '../../hooks/api/useTicket';
import { verifyPermission } from './verifyPermission';

export default function SelectActivities() {
  const { ticket, ticketError } = useTicket();
  const [authStatus, setAutStatus] = useState({
    isAllowed: true,
    message: '',
  });

  useEffect(() => {
    if (ticket || ticketError) verifyPermission({ ticket, setAutStatus, ticketError });
  }, [ticket, ticketError]);

  return (
    <>
      <Typography variant="h4">Escolha de atividades</Typography>
      {!authStatus.isAllowed ? <ErrorWrapper>{authStatus.message}</ErrorWrapper> : 'Atividades: Em breve!'}
    </>
  );
}
