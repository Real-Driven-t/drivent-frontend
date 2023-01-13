import ErrorWrapper from '../ErrorWrapper';
import Locals from './Locals.';

export default function ActivitiesLogic({ authStatus }) {
  return(
    !authStatus.isAllowed ? <ErrorWrapper>{authStatus.message}</ErrorWrapper> : <Locals />
  );
}
