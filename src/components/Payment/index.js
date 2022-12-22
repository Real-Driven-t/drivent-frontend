import { useEffect, useState } from 'react';
import useTicket from '../../hooks/api/useTicket';
import useEnrollment from '../../hooks/api/useEnrollment';
import ErrorWarper from '../ErrorWrapper';
import TicketScreen from './TciketScreen';

export default function PaymentScreen() {
  const [reload, setReload] = useState(0);
  const [ticket, setTicket] = useState({});
  const { getUserTicket } = useTicket();
  const { enrollment } = useEnrollment();

  useEffect(() => {
    const promisse = getUserTicket();
    promisse.then(p => { if(p) setTicket(p); });
  }, [reload]);
  console.log(ticket);
  return(
    <>
      {!enrollment ? <ErrorWarper>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</ErrorWarper> : <TicketScreen ticket={ticket} setReload={setReload} reload={reload}/>}
    </>
  );
}
