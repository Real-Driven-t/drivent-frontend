import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activityApi from '../../services/activityApi';

export default function useActivitiesByDay() {
  const token = useToken();

  const {
    data: activitiesByDay,
    loading: activitiesByDayLoading,
    error: activitiesByDayError,
    act: getActivitiesByDay,
  } = useAsync((data) => activityApi.getActivitiestWithPlace(data, token), false);

  return {
    activitiesByDay,
    activitiesByDayLoading,
    activitiesByDayError,
    getActivitiesByDay,
  };
}
