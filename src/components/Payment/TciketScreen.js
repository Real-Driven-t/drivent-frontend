import SelectTicket from '../SelectTicket';
import CreditCardScreen from './CreditCardScreen';

export default function TicketScreen({ ticket, setReload, reload }) {
  return(
    <>
      {ticket.id ? <CreditCardScreen ticket={ticket} setReload={setReload} reload={reload}/> : <SelectTicket setReload={setReload} reload={reload}/>}
    </>
  );
};

