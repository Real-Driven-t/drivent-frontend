import { useEffect, useState } from 'react';
import useTicket from '../../hooks/api/useTicket';
import useEnrollment from '../../hooks/api/useEnrollment';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import LoadingScreen from '../LoadingScreen';
import PaymentLogic from './PaymentLogic';

export default function PaymentScreen() {
  const [reload, setReload] = useState(0);
  const [ticket, setTicket] = useState({});
  const { getUserTicket, ticketLoading } = useTicket();
  const { enrollment, enrollmentLoading } = useEnrollment();

  useEffect(() => {
    const promisse = getUserTicket();
    promisse.then((p) => {
      if (p) setTicket(p);
    });
  }, [reload]);
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      { ticketLoading || enrollmentLoading ?
        <LoadingScreen/> :
        <PaymentLogic enrollment={enrollment} ticket={ticket} setReload={setReload} reload={reload}/>}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 37px !important;
`;
