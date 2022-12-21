import useAsync from '../useAsync';
import useToken from '../useToken';

import * as bookingApi from '../../services/bookingApi';

export default function useUpdateBooking() {
  const token = useToken();

  const {
    loading: UpdateBookingLoading,
    error: UpdateBookingError,
    act: putBooking,
  } = useAsync((roomId, bookingId) => bookingApi.updateBooking(roomId, bookingId, token), false);

  return {
    UpdateBookingLoading,
    UpdateBookingError,
    putBooking,
  };
}
