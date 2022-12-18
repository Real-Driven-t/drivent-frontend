import TicketInfoContainer from './TicketInfoContainer';
import { getTicket } from '../../../services/ticketApi';
import { useEffect, useState } from 'react';
import useToken from '../../../hooks/useToken';

export default function PaymentScreen() {
  const token = useToken();
  console.log(token);
  const [ticket, setTicket] = useState({});
  useEffect(() =>  {getTicket(token).then(p => setTicket(p));}, []);
  return(
    <>
      {ticket.id ? <TicketInfoContainer ticketType={ticket.TicketType}/> : <h1>Carregando</h1>}
    </>
  );
}
