import { Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import useTicket from '../../hooks/api/useTicket';
import { verifyPermission } from './verifyPermission';
import ActivitiesLogic from './ActivitiesLogic';
import LoadingScreen from '../LoadingScreen';

export default function SelectActivities() {
  const { ticket, ticketError, ticketLoading } = useTicket();
  const [authStatus, setAuthStatus] = useState({
    isAllowed: true,
    message: '',
  });

  useEffect(() => {
    if (ticket || ticketError) verifyPermission({ ticket, setAuthStatus, ticketError });
  }, [ticket, ticketError]);

  return (
    <>
      <Typography variant="h4">Escolha de atividades</Typography>
      {ticketLoading ? <LoadingScreen/> : <ActivitiesLogic authStatus={authStatus}/>}
    </>
  );
}
