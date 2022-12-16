import * as Op from './ticketOptions';
import styled from 'styled-components';
import OneCard from './OneCard';
import { useEffect } from 'react';

export default function HotelOptions({ withHotel, setWithHotel }) {
  useEffect(() => {
    setWithHotel('');
  }, []);

  return (
    <Wrapper>
      <p>Ótimo! Agora escolha sua modalidade de hospedagem</p>
      <div>
        {Op.hotelOptions.map((e, index) => {
          return <OneCard key={index} element={e} selected={withHotel} setSelected={setWithHotel} />;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 44px;
  & > :last-child {
    display: flex;
    margin-top: 17px;
  }

  p {
    color: #8e8e8e;
    font-size: 20px;
    font-weight: 400;
  }
`;
