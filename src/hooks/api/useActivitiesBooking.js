import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activityApi from '../../services/activityApi';

export default function useActivitiesBooking() {
  const token = useToken();

  const {
    data: activitiesBooking,
    loading: activitiesBookingLoading,
    error: activitiesBookingError,
    act: getUserActivitiesBooking,
  } = useAsync(() => activityApi.getUserActivitiesBooking(token));

  return {
    activitiesBooking,
    activitiesBookingLoading,
    activitiesBookingError,
    getUserActivitiesBooking,
  };
}
