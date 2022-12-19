import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

export default function HotelDescription({ value }) {
  const [roomType, setRoomType] = useState('');
  const [fullyCapacity, setFullyCapacity] = useState(0);

  useEffect(() => {
    let hash = {};
    let capacity = 0;
    for (let i = 0; i < value.Rooms.length; i++) {
      capacity += value.Rooms[i].capacity;
      if (hash[value.Rooms[i].capacity]) {
        continue;
      }
      hash[value.Rooms[i].capacity] = true;
    }

    setFullyCapacity(capacity);

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
      <Description>
        <img src={value.image} alt="hotel" />
        <p>{value.name}</p>
        <h1>Tipos de acomodação:</h1>
        <h2>{roomType}</h2>
        <h1>Vagas disponíveis:</h1>
        <h2>{fullyCapacity}</h2>
      </Description>
    </>
  );
}

const Description = styled.div`
  width: 196px;
  height: 264px;
  border-radius: 10px;
  margin: 0 20px 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  background-color: #ebebeb;
  font-family: 'Roboto', sans-serif;
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
  }
  h2 {
    width: 90%;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #3c3c3c;
    margin: 2px 0 14px 0;
  }
`;
