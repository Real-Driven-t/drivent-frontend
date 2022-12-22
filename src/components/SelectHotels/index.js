import ValidateHotel from './ValidateHotels';
import HotelsRender from './HotelsRender';

import { useState } from 'react';
import useBooking from '../../hooks/api/useBooking';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import HotelBooking from './HotelBooking';
import { useEffect } from 'react';

export default function SelectHotels() {
  const { getBooking } = useBooking();
  const [reload, setReload] = useState(0);
  const [booking, setBooking] = useState({});
  const [isChangeRoom, setIsChangeRoom] = useState(false);
  const [authStatus, setAutStatus] = useState({
    isAllowed: false,
    message: '',
  });

  useEffect(() => {
    const promisse = getBooking();
    promisse.then((p) => {
      if (p) setBooking(p);
    });
  }, [reload]);

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      <ValidateHotel authStatus={authStatus} setAutStatus={setAutStatus} />
      {booking.id ? (
        <HotelBooking
          booking={booking}
          isChangeRoom={isChangeRoom}
          setIsChangeRoom={setIsChangeRoom}
          setAutStatus={setAutStatus}
        />
      ) : (
        <HotelsRender reload={reload} setReload={setReload} />
      )}
      {isChangeRoom ? (
        <HotelsRender bookingId={booking.id} setIsChangeRoom={setIsChangeRoom} reload={reload} setReload={setReload} />
      ) : (
        <></>
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
