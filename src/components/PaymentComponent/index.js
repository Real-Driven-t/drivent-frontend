import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import RemoteOptions from './RemoteOptions';
import { useState } from 'react';
import HotelOptions from './HotelOptions';
import { OptionName, OptionValues } from './ticketOptions';
import Submit from './Submit';

export default function PaymentForm() {
  const [localyName, setLocalyName] = useState('');
  const [withHotel, setWithHotel] = useState('');

  const isWithHotel = localyName === OptionName.PESENTIAL && withHotel === OptionName.WITH_HOTEL;
  const isPresential = localyName === OptionName.PESENTIAL && withHotel === OptionName.WITHOUT_HOTEL;
  const isParcialPresential = localyName === OptionName.PESENTIAL;
  const isOnline = localyName === OptionName.ONLINE;

  function renderSubmit() {
    if (isOnline) {
      return <Submit value={OptionValues.ONLINE} />;
    } else if (isPresential) {
      return <Submit value={OptionValues.WITHOUT_HOTEL} />;
    } else if (isWithHotel) {
      return <Submit value={OptionValues.WITH_HOTEL} />;
    }
  }

  return (
    <>
      <StyledTypography variant="h4">Suas Informações</StyledTypography>
      <RemoteOptions localyName={localyName} setLocalyName={setLocalyName} />
      {isParcialPresential ? <HotelOptions withHotel={withHotel} setWithHotel={setWithHotel} /> : <></>}
      {renderSubmit()}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 37px !important;
`;