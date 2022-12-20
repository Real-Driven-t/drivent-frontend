import { useState } from 'react';
import useTicket from '../../hooks/api/useTicket';
import useEnrollment from '../../hooks/api/useEnrollment';
import ErrorWarper from '../ErrorWrapper';
import TicketScreen from './TciketScreen';

export default function PaymentScreen() {
  const [reload, setReload] = useState(0);
  const { ticket } = useTicket();
  const { enrollment } = useEnrollment();
  return(
    <>
      {!enrollment ? <ErrorWarper>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</ErrorWarper> : <TicketScreen ticket={ticket} setReload={setReload} reload={reload}/>}
    </>
  );
}
