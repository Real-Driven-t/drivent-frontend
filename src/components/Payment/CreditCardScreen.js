import { Wrapper } from './commonStyles';
import TicketInfoContainer from './TicketInfoContainer';
import PaymentForm from './CreditCardForm';
import SucessScreen from './SucessScreen';
import useToken from '../../hooks/useToken';

export default function CreditCardScreen({ ticket, setReload, reload }) {
  console.log(ticket.status);
  const token = useToken();
  return(
    <>
      <TicketInfoContainer ticketType={ticket.TicketType}/>
      <Wrapper>
        <p>Pagamento</p>
      </Wrapper>
      {ticket.status === 'PAID' ? <SucessScreen/> : <PaymentForm token={token} ticketId = {ticket.id} setReload={setReload} reload={reload}/>}
    </>
  );
}
