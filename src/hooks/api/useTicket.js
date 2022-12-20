import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function useTicket() {
  const token = useToken();

  const {
    data: ticket,
    loading: ticketLoading,
    error: ticketError,
    act: getUserTicket,
  } = useAsync(() => ticketApi.getUserTicket(token));

  return {
    ticket,
    ticketLoading,
    ticketError,
    getUserTicket,
  };
}
