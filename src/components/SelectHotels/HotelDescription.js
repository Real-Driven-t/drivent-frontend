import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import useRooms from '../../hooks/api/useRooms';

export default function HotelDescription({ value, selectHotel, setSelectHotel }) {
  const [roomType, setRoomType] = useState('');
  const [isSelect, setIsSelect] = useState(false);

  const { rooms } = useRooms(value.id);
  const totalVancancies = rooms?.reduce((total, room) => total + room.capacity - room._count.Booking, 0);

  function changeColor() {
    setSelectHotel(value.id);
  }

  useEffect(() => {
    if (selectHotel === value.id) {
      setIsSelect(true);
    } else {
      setIsSelect(false);
    }
  }, [selectHotel]);

  useEffect(() => {
    let hash = {};
    for (let i = 0; i < value.Rooms.length; i++) {
      if (hash[value.Rooms[i].capacity]) {
        continue;
      }
      hash[value.Rooms[i].capacity] = true;
    }

    if (hash[1] && hash[2]) {
      setRoomType('Single e Double');
    }

    if (hash[2] && hash[3]) {
      setRoomType('Double e Triple');
    }

    if (hash[1] && hash[3]) {
      setRoomType('Single e Triple');
    }

    if (hash[1] && hash[2] && hash[3]) {
      setRoomType('Single, Double e Triple');
    }
  }, []);

  return (
    <>
      <Description
        onClick={() => {
          changeColor();
        }}
        isSelect={isSelect}
      >
        <img src={value.image} alt="hotel" />
        <p>{value.name}</p>
        <h1>Tipos de acomodação:</h1>
        <h2>{roomType}</h2>
        <h1>Vagas disponíveis:</h1>
        <h2>{totalVancancies}</h2>
      </Description>
    </>
  );
}

const Description = styled.div`
  width: 196px;
  min-height: 264px;
  border-radius: 10px;
  margin: 0 20px 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  background-color: ${(props) => (props.isSelect ? '#FFEED2' : '#F1F1F1')};
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  img {
    max-width: 168px;
    height: auto;
    border-radius: 5px;
  }
  p {
    width: 90%;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #343434;
    margin: 10px 0;
  }
  h1 {
    width: 90%;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #3c3c3c;
    margin: 14px 0 2px 0;
  }
  h2 {
    width: 90%;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #3c3c3c;
  }
`;
