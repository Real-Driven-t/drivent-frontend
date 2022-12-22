import ErrorWrapper from '../ErrorWrapper';
import { Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import useTicket from '../../hooks/api/useTicket';
import { verifyPermission } from './verifyPermission';

export default function SelectActivities() {
  const { ticket, ticketError } = useTicket();
  const [authStatus, setAuthStatus] = useState({
    isAllowed: true,
    message: '',
  });

  const date = new Date();
  date.setHours(0, 0, 0, 0);

  useEffect(() => {
    if (ticket || ticketError) verifyPermission({ ticket, setAuthStatus, ticketError });
  }, [ticket, ticketError]);

  return (
    <>
      <Typography variant="h4">Escolha de atividades</Typography>
      {!authStatus.isAllowed ? <ErrorWrapper>{authStatus.message}</ErrorWrapper> : 'Atividades: Em breve!'}
    </>
  );
}
