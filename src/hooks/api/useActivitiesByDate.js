import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activityApi from '../../services/activityApi';

export default function useSaveTicket() {
  const token = useToken();

  const {
    loading: activitiesByDayLoading,
    error: activitiesByDayError,
    act: getActivitiesByDay,
  } = useAsync((data) => activityApi.getActivitiestWithPlace(data, token), false);

  return {
    activitiesByDayLoading,
    activitiesByDayError,
    getActivitiesByDay,
  };
}
