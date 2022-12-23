import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activityApi from '../../services/activityApi';

export default function useCreateRegisterActivity(activityId) {
  const token = useToken();

  const {
    data: regiterCreated,
    loading: registerCreatedLoading,
    error: registerCreatedError,
    act: createRegister,
  } = useAsync(() => activityApi.createRegisterActivity(token, { activityId }), false);

  return {
    regiterCreated,
    registerCreatedLoading,
    registerCreatedError,
    createRegister,
  };
}
