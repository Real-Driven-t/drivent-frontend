import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import RemoteOptions from './RemoteOptions';
import { useState } from 'react';
import HotelOptions from './HotelOptions';
import { OptionName } from './ticketOptions';

export default function PaymentForm() {
  const [localyName, setLocalyName] = useState('');
  const [withHotel, setWithHotel] = useState('');

  return (
    <>
      <StyledTypography variant="h4">Suas Informações</StyledTypography>
      <RemoteOptions localyName={localyName} setLocalyName={setLocalyName} />
      {localyName === OptionName.PESENTIAL ? <HotelOptions withHotel={withHotel} setWithHotel={setWithHotel} /> : <></>}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 37px !important;
`;
