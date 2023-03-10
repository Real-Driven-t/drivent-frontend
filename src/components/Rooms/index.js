import { useState, useRef, useEffect } from 'react';

import styled from 'styled-components';
import { toast } from 'react-toastify';

import Room from './Room';
import useRooms from '../../hooks/api/useRooms';
import useCreateBooking from '../../hooks/api/useCreateBooking';
import useUpdateBooking from '../../hooks/api/useUpdateBooking';
import LoadingButton from '../LoadingButton';

export default function RoomsOfHotel({ hotelId, bookingId, setIsChangeRoom, reload, setReload }) {
  const [roomIdSelected, setRoomIdSelected] = useState(0);
  const [rooms, setRooms] = useState([]);
  const { putBooking, UpdateBookingLoading } = useUpdateBooking();
  const { createBooking } = useCreateBooking();
  const { getRooms } = useRooms(hotelId);
  const selectedId = useRef(0);

  const handleClick = (roomId) => {
    selectedId.current = roomId;
    setRoomIdSelected(roomId);
  };

  useEffect(() => {
    getRooms().then((res) => setRooms(res));
    setRoomIdSelected(0);
  }, [hotelId]);

  async function upsertBooking() {
    try {
      if (bookingId) {
        const { UpdateBookingError } = await putBooking(roomIdSelected, bookingId);
        setIsChangeRoom(false);
        toast('Informações alteradas com sucesso!');
        if (UpdateBookingError) throw UpdateBookingError;
        setReload((reload) => reload + 1);
        return;
      }
      const { bookingError } = await createBooking(roomIdSelected);
      toast('Informações salvas com sucesso!');
      if (bookingError) throw bookingError;
      setReload((reload) => reload + 1);
    } catch (error) {
      toast('Não foi possível salvar suas informações!');
    }
  }

  return (
    <ContainerRooms>
      <h1>Ótima pedida! Agora escolha seu quarto</h1>
      <Rooms>
        {rooms?.map((e, index) => (
          <Room
            number={e.name}
            capacity={e.capacity}
            bookings={e._count.Booking}
            roomId={e.id}
            handleClick={handleClick}
            selectedId={selectedId.current}
            hotelId={hotelId}
            key={index}
          />
        ))}
      </Rooms>
      {
        //prettier-ignore
        roomIdSelected === 0 ? '' : <button onClick={async() => await upsertBooking()}>
          <LoadingButton isLoading={UpdateBookingLoading}>RESERVAR QUARTO</LoadingButton>
        </button>
      }
    </ContainerRooms>
  );
}

const ContainerRooms = styled.div`
  font-family: 'Roboto', sans-serif;
  margin-top: 50px;
  h1 {
    font-size: 20px;
    color: #8e8e8e;
  }
  button {
    outline: none;
    border: none;
    height: 37px;
    width: 182px;
    background-color: #e0e0e0;
    border-radius: 4px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;
const Rooms = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 33px;
  margin-bottom: 46px;
`;
