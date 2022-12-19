import TicketInfoContainer from './TicketInfoContainer';
import { getTicket } from '../../../services/ticketApi';
import { useEffect, useState } from 'react';
import useToken from '../../../hooks/useToken';
import PaymentForm from './CreditCardForm';
import SucessScreen from './SucessScreen';

export default function PaymentScreen() {
  const token = useToken();
  console.log(token);
  const [ticket, setTicket] = useState({});
  useEffect(() =>  {getTicket(token).then(p => setTicket(p));}, []);
  return(
    <>
      {ticket.id ? <TicketInfoContainer ticketType={ticket.TicketType}/> : <h1>Carregando</h1>}
      {ticket.status === 'PAID' ? <SucessScreen/> : <PaymentForm/>}
    </>
  );
}
