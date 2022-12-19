import useAsync from '../useAsync';
import useToken from '../useToken';

import * as roomApi from '../../services/rooms';

export default function useRooms(hotelId) {
  const token = useToken();

  const {
    data: rooms,
    loading: roomsLoading,
    error: roomsError,
    act: getRooms,
  } = useAsync(() => roomApi.getRooms(hotelId, token));

  return {
    rooms,
    roomsLoading,
    roomsError,
    getRooms,
  };
}
