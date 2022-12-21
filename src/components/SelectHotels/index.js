import ValidateHotel from './ValidateHotels';
import HotelsRender from './HotelsRender';

import { useState } from 'react';
import useBooking from '../../hooks/api/useBooking';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import HotelBooking from './HotelBooking';
import { useEffect } from 'react';

export default function SelectHotels() {
  const { booking } = useBooking();
  const [isChangeRoom, setIsChangeRoom] = useState(false);
  const [authStatus, setAutStatus] = useState({
    isAllowed: false,
    message: '',
  });

  useEffect(() => {
    if (booking) {
      setAutStatus(false);
    }
  }, [booking]);

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {booking ? (
        <HotelBooking
          booking={booking}
          isChangeRoom={isChangeRoom}
          setIsChangeRoom={setIsChangeRoom}
          setAutStatus={setAutStatus}
        />
      ) : (
        <ValidateHotel authStatus={authStatus} setAutStatus={setAutStatus} />
      )}
      {authStatus.isAllowed ? <HotelsRender /> : <></>}
      {isChangeRoom ? <HotelsRender /> : <></>}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
