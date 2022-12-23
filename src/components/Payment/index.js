import { useEffect, useState } from 'react';
import useTicket from '../../hooks/api/useTicket';
import useEnrollment from '../../hooks/api/useEnrollment';
import ErrorWarper from '../ErrorWrapper';
import TicketScreen from './TciketScreen';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export default function PaymentScreen() {
  const [reload, setReload] = useState(0);
  const [ticket, setTicket] = useState({});
  const { getUserTicket } = useTicket();
  const { enrollment } = useEnrollment();

  useEffect(() => {
    const promisse = getUserTicket();
    promisse.then((p) => {
      if (p) setTicket(p);
    });
  }, [reload]);
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      {!enrollment ? (
        <ErrorWarper>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</ErrorWarper>
      ) : (
        <TicketScreen ticket={ticket} setReload={setReload} reload={reload} />
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 37px !important;
`;
