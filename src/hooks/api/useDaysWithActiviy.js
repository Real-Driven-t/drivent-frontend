import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activityApi from '../../services/activityApi';

export default function useDaysWithActivity() {
  const token = useToken();

  const {
    data: days,
    loading: daysLoading,
    error: daysError,
    act: getDaysWithActivities,
  } = useAsync(() => activityApi.getDaysWithActivities(token));

  return {
    days,
    daysLoading,
    daysError,
    getDaysWithActivities,
  };
}
