import useAsync from '../useAsync';
import useToken from '../useToken';

import * as paymentApi from '../../services/paymentApi';

export default function usePayment() {
  const token = useToken();

  const {
    data: payment,
    loading: paymentLoading,
    error: paymentError,
    act: postPayment,
  } = useAsync((data) => paymentApi.postPayment(token, data), false);

  return {
    payment,
    paymentLoading,
    paymentError,
    postPayment,
  };
}
