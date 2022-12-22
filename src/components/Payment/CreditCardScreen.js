import { Wrapper } from './commonStyles';
import TicketInfoContainer from './TicketInfoContainer';
import PaymentForm from './CreditCardForm';
import SucessScreen from './SucessScreen';
import usePayment from '../../hooks/api/usePayment';

export default function CreditCardScreen({ ticket, setReload, reload }) {
  const { postPayment } = usePayment();
  return(
    <>
      <TicketInfoContainer ticketType={ticket.TicketType}/>
      <Wrapper>
        <p>Pagamento</p>
      </Wrapper>
      {ticket.status === 'PAID' ? <SucessScreen/> : <PaymentForm postPayment={postPayment} ticketId = {ticket.id} setReload={setReload} reload={reload}/>}
    </>
  );
}
