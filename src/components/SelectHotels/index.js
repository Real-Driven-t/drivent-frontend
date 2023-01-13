import ValidateHotel from './ValidateHotels';
import HotelsRender from './HotelsRender';

import { useState } from 'react';
import useBooking from '../../hooks/api/useBooking';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { useEffect } from 'react';
import HotelLogic from './HotelLogic';
import LoadingScreen from '../LoadingScreen';

export default function SelectHotels() {
  const { getBooking, bookingLoading } = useBooking();
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
      {bookingLoading ? <LoadingScreen/> :
        <HotelLogic booking={booking} isChangeRoom={isChangeRoom} setIsChangeRoom={setIsChangeRoom} setAutStatus={setAutStatus} reload={reload} setReload={setReload}/>}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
