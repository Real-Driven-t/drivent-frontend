import styled from 'styled-components';
import SelectTicket from '../SelectTicket';
import { Typography } from '@material-ui/core';
import CreditCardScreen from './CreditCardScreen';

export default function TicketScreen({ ticket, setReload, reload }) {
  return(
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      {ticket.id ? <CreditCardScreen ticket={ticket} setReload={setReload} reload={reload}/> : <SelectTicket setReload={setReload} reload={reload}/>}
    </>
  );
};

const StyledTypography = styled(Typography)`
  margin-bottom: 37px !important;
`;