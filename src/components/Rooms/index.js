import { useState, useRef, useEffect } from 'react';

import styled from 'styled-components';

import Room from './Room';
import useRooms from '../../hooks/api/useRooms';
import useCreateBooking from '../../hooks/api/useCreateBooking';

export default function RoomsOfHotel({ hotelId }) {
  const [roomIdSelected, setRoomIdSelected] = useState(0);
  const [rooms, setRooms] = useState([]);
  const { getRooms } = useRooms(hotelId);
  const { createBooking } = useCreateBooking(roomIdSelected);
  const selectedId = useRef(0);

  const handleClick = (roomId) => {
    selectedId.current = roomId;
    setRoomIdSelected(roomId);
  };

  useEffect(() => {
    getRooms().then((res) => setRooms(res));
  }, [hotelId]);

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
            key={index}
          />
        ))}
      </Rooms>
      {
        //prettier-ignore
        roomIdSelected === 0 ? '' : <button onClick={async() => await createBooking()}>RESERVAR QUARTO</button>
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
