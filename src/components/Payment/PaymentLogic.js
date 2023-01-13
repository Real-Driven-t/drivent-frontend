import ErrorWarper from '../ErrorWrapper';
import TicketScreen from './TciketScreen';

export default function PaymentLogic({ enrollment, ticket, setReload, reload }) {
  return (
    !enrollment ? (
      <ErrorWarper>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</ErrorWarper>
    ) : (
      <TicketScreen ticket={ticket} setReload={setReload} reload={reload} />
    )
  );
}
