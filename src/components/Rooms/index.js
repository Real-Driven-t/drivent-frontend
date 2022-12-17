import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Room from './Room';
import useToken from '../../hooks/useToken';
import axios from 'axios';

export default function RoomsOfHotel() {
  const [isThereASelectedRoom, setIsThereASelectedRoom] = useState(false);
  const [rooms, setRooms] = useState([]);
  const token = useToken();
  useEffect(() => {
    axios.get('http://localhost:4000/rooms/1').then((res) => {
      setRooms(res.data);
    });
  }, []);
  console.log(rooms);

  return (
    <ContainerRooms>
      <h1>Ótima pedida! Agora escolha seu quarto</h1>
      <Rooms>
        {rooms.map((e, index) => (
          <Room number={e.name} capacity={e.capacity} bookings={e._count.Booking} key={index} />
        ))}
      </Rooms>
      <button>RESERVAR QUARTO</button>
    </ContainerRooms>
  );
}

const ContainerRooms = styled.div`
  font-family: 'Roboto', sans-serif;
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
