import useHotels from '../../hooks/api/useHotels';
import HotelDescription from './HotelDescription';
import RoomsOfHotel from '../Rooms';

import styled from 'styled-components';
import { useEffect, useState } from 'react';

export default function HotelsRender() {
  const hotels = useHotels();

  const [content, setContent] = useState(<></>);
  const [selectHotel, setSelectHotel] = useState(null);

  useEffect(() => {
    if (hotels.hotels) {
      setContent(
        <>
          <Text>Primeiro, escolha seu hotel</Text>
          <ChooseHotels>
            {hotels.hotels.map((value, index) => (
              <HotelDescription value={value} key={index} selectHotel={selectHotel} setSelectHotel={setSelectHotel} />
            ))}
          </ChooseHotels>
          {!selectHotel ? '' : <RoomsOfHotel hotelId={selectHotel} />}
        </>
      );
    }
  }, [hotels.hotelsLoading, selectHotel]);

  return content;
}

const Text = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #8e8e8e;
  margin: 0 0 10px 0;
`;

const ChooseHotels = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
