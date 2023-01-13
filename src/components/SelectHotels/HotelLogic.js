import HotelBooking from './HotelBooking';
import HotelsRender from './HotelsRender';

export default function HotelLogic({ booking, isChangeRoom, setIsChangeRoom, setAutStatus, reload, setReload }) {
  return(
    <>
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
