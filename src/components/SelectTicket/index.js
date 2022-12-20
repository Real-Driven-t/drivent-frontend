import RemoteOptions from './RemoteOptions';
import { useState } from 'react';
import HotelOptions from './HotelOptions';
import { OptionName } from './ticketOptions';
import Submit from './Submit';
import useTicketTypes from '../../hooks/api/useTicketTypes';

export default function SelectTicket() {
  const [localyName, setLocalyName] = useState('');
  const [withHotel, setWithHotel] = useState('');
  const { ticketTypes } = useTicketTypes();
  const [total, setTotal] = useState(0);

  const isPresential = localyName === OptionName.PESENTIAL;
  const isAllChosed =
    localyName === OptionName.ONLINE || withHotel === OptionName.WITHOUT_HOTEL || withHotel === OptionName.WITH_HOTEL;

  return (
    <>
      <RemoteOptions setTotal={setTotal} localyName={localyName} setLocalyName={setLocalyName} />
      {isPresential ? <HotelOptions setTotal={setTotal} withHotel={withHotel} setWithHotel={setWithHotel} /> : <></>}
      {isAllChosed ? <Submit total={total} ticketTypes={ticketTypes} /> : <></>}
    </>
  );
}
